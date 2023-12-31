package com.springboot.farm2marketbackend.controller;

import com.springboot.farm2marketbackend.data.dto.ChatRequest;
import com.springboot.farm2marketbackend.data.dto.ChatResponse;
import com.springboot.farm2marketbackend.data.dto.SupplierBoardDto;
import com.springboot.farm2marketbackend.data.entity.Image;
import com.springboot.farm2marketbackend.data.entity.SupplierBoard;
import com.springboot.farm2marketbackend.data.entity.User;
import com.springboot.farm2marketbackend.repository.UserRepository;
import com.springboot.farm2marketbackend.service.ImageService;
import com.springboot.farm2marketbackend.service.SupplierBoardService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.List;

import static org.hibernate.tool.schema.SchemaToolingLogging.LOGGER;

@RestController
@RequestMapping("/supplier-board")
public class SupplierBoardController {
    final private SupplierBoardService supplierBoardService;
    final private ImageService imageService;
    final private UserRepository userRepository;
    @Qualifier("openaiRestTemplate")
    @Autowired
    private RestTemplate restTemplate;

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiUrl;

    @Autowired
    public SupplierBoardController(SupplierBoardService supplierBoardService, ImageService imageService, UserRepository userRepository) {
        this.supplierBoardService = supplierBoardService;
        this.imageService = imageService;
        this.userRepository = userRepository;
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping
    public ResponseEntity<SupplierBoardDto> createSupplierBoard(
            @RequestParam("file") MultipartFile imageFile,
            @RequestParam("product") String product,
            @RequestParam("price") Long price,
            @RequestParam("keyword") String keyword,
            HttpServletRequest request
    ) throws IOException {

        Image image = imageService.uploadImage(imageFile);

        String prompt = String.format(
                "제품명: %s, 가격: %d, 키워드: %s",
                product, price, keyword
        );
        prompt += "앞의 정보를 가지고 농산물 소개글을 3줄 작성해줘";
        String prompt2 = "\""+prompt+"\""+"이 농산물 소개글을 바탕으로 글 제목을 만들어주는데 공백포함 60자 이하로 만들어줘. 글자제한 엄수해줘";
        ChatRequest request1 = new ChatRequest(model, prompt);
        ChatRequest request2 = new ChatRequest(model, prompt2);
        ChatResponse response = restTemplate.postForObject(
                apiUrl,
                request1,
                ChatResponse.class);
        ChatResponse titleResponse = restTemplate.postForObject(
                apiUrl,
                request2,
                ChatResponse.class);
        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()
        || titleResponse.getChoices()==null ||titleResponse.getChoices().isEmpty()) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userUid = authentication.getName();        // id찾기
        User user = userRepository.findByUid(userUid);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        Long userId = user.getId();
        String userName = user.getName();
        SupplierBoardDto supplierBoardDto = SupplierBoardDto.builder()
                .user_id(userId)
                .name(userName)
                .product(product)
                .price(price)
                .keyword(keyword)
                .createdDate(LocalDateTime.now())
                .modifiedDate(LocalDateTime.now())
                .imageId(image.getId())
                .build();

        supplierBoardDto.setImage(image);

        String introduction = response.getChoices().get(0).getMessage().getContent();
        LOGGER.info("Generated Introduction from GPT: " + introduction);
        supplierBoardDto.setIntroduction(introduction); // Set the generated introduction to the DTO
        String title = titleResponse.getChoices().get(0).getMessage().getContent();
        LOGGER.info("Generated title from GPT: " + title);
        supplierBoardDto.setTitle(title);
        SupplierBoardDto savedSupplierBoardDto = supplierBoardService.saveSupplierBoard(supplierBoardDto, imageFile);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedSupplierBoardDto);
    }


    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping("/{id}")
    public ResponseEntity<SupplierBoardDto> getSupplierBoard(@PathVariable Long id, HttpServletRequest request) {
        SupplierBoardDto supplierBoardDtoResponse = supplierBoardService.getSupplierBoard(id);

        // 이미지 정보도 함께 제공하도록 수정
        LOGGER.info("호출 API: " + "get SupplierBoard" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " + LocalDateTime.now());
        if (supplierBoardDtoResponse.getImageData() != null) {
            // 이미지 데이터를 Base64 인코딩하여 문자열로 변환하여 전달
            String base64ImageData = Base64.getEncoder().encodeToString(supplierBoardDtoResponse.getImageData());
            supplierBoardDtoResponse.setImageData(base64ImageData.getBytes());
        }

        return ResponseEntity.status(HttpStatus.OK).body(supplierBoardDtoResponse);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PutMapping("/{id}")
    public ResponseEntity<SupplierBoardDto> updateSupplierBoard(
            @PathVariable Long id,
            @RequestPart(required = false) MultipartFile imageFile,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String product,
            @RequestParam(required = false) Long price,
            @RequestParam(required = false) String keyword
    ) throws Exception {
        SupplierBoardDto supplierBoardDto = SupplierBoardDto.builder()
                .id(id)
                .name(name)
                .product(product)
                .price(price)
                .keyword(keyword)
                .build();
        if (imageFile != null) {
            Image image = imageService.uploadImage(imageFile);
            supplierBoardDto.setImage(image);
        }
        SupplierBoardDto supplierBoardDtoResponse = supplierBoardService.updateSupplierBoard(id, supplierBoardDto);
        return ResponseEntity.status(HttpStatus.OK).body(supplierBoardDtoResponse);
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping()
    public ResponseEntity<String> deleteSupplierBoard (Long id, HttpServletRequest request) throws Exception
    {
        supplierBoardService.deleteSupplierBoard(id);

        LOGGER.info("호출 API: " + "delete SupplierBoard" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body("성공적으로 삭제 되었습니다.");
    }
    @GetMapping("/getAllSupplierBoard")
    public ResponseEntity<List<SupplierBoard>> getAllSupplierBoard()
    {
        List<SupplierBoard> supplierBoardResponse = supplierBoardService.getAllSupplierBoard();
        LOGGER.info("호출 API: " + "get all frontend applications" + " 접속자 IP: " + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(supplierBoardResponse);
    }
}