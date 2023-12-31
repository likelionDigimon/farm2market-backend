package com.springboot.farm2marketbackend.controller;


import com.springboot.farm2marketbackend.data.dto.ChangeQuestionDto;
import com.springboot.farm2marketbackend.data.dto.QuestionDto;
import com.springboot.farm2marketbackend.data.dto.QuestionResponseDto;
import com.springboot.farm2marketbackend.data.entity.Question;
import com.springboot.farm2marketbackend.service.QuestionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class QuestionController {

    private final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })

    @GetMapping()
    public ResponseEntity<QuestionResponseDto> getQuestion(Long id) {
        long currentTime = System.currentTimeMillis();
        LOGGER.info("[getSign] request Data :: Id : {}", id);
        QuestionResponseDto questionResponseDto = questionService.getQuestion(id);

        LOGGER.info(
                "[getSign] response Data :: productId : {}, productName : {}, productPrice : {}, productStock : {}",
                questionResponseDto.getId(), questionResponseDto.getAuthor(),
                questionResponseDto.getTitle(), questionResponseDto.getContent());
        LOGGER.info("[getSign] Response Time : {}ms", System.currentTimeMillis() - currentTime);

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }


    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })

    @PostMapping()
    public ResponseEntity<QuestionResponseDto> createQuestion(@RequestBody QuestionDto questionDto) {
        long currentTime = System.currentTimeMillis();
        QuestionResponseDto questionResponseDto = questionService.saveQuestion(questionDto);

        LOGGER.info("[createSign] Response Time : {}ms", System.currentTimeMillis() - currentTime);
        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })

    @PutMapping()
    public ResponseEntity<QuestionResponseDto> changeQuestion(
            @RequestBody ChangeQuestionDto changeQuestionDto) throws Exception {
        long currentTime = System.currentTimeMillis();
        LOGGER.info("[changeQuestion] request Data :: productContent : {}, productContent : {}",
                changeQuestionDto.getId(), changeQuestionDto.getContent());


        QuestionResponseDto questionResponseDto = questionService.changeQuestion(
                changeQuestionDto.getId(),
                changeQuestionDto.getContent());

        LOGGER.info(
                "[changeQuestionName] response Data :: questionId : {}, questionTitle : {}, questionAuthor : {}, questionContent : {}",
                questionResponseDto.getId(), questionResponseDto.getTitle(),
                questionResponseDto.getAuthor(), questionResponseDto.getContent());
        LOGGER.info("[changeProductName] response Time : {}ms",
                System.currentTimeMillis() - currentTime);

        return ResponseEntity.status(HttpStatus.OK).body(questionResponseDto);

    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })


    @DeleteMapping()
    public ResponseEntity<String> deleteQuestion(Long id) throws Exception {
        questionService.deleteQuestion(id);

        long currentTime = System.currentTimeMillis();
        LOGGER.info("[deleteQuestion] request Data :: questionId : {}", id);

//        questionService.deleteQuestion(id);

        LOGGER.info("[deleteProduct] response Time : {}ms",
                System.currentTimeMillis() - currentTime);

        return ResponseEntity.status(HttpStatus.OK).body("정상적으로 삭제되었습니다.");
    }

    @GetMapping("/all")
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();

        return ResponseEntity.status(HttpStatus.OK).body(questions);
    }

}

