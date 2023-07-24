package com.springboot.farm2marketbackend.controller;

import com.springboot.farm2marketbackend.data.dto.AnswerDto;
import com.springboot.farm2marketbackend.service.AnswerService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/Answer")
public class AnswerController {
    private final AnswerService answerService;
    private final Logger LOGGER = LoggerFactory.getLogger(AnswerService.class);

    @Autowired
    public AnswerController(AnswerService answerService){
        this.answerService = answerService;
    }

    @PostMapping()
    public ResponseEntity<AnswerDto> createAnswer(
            @RequestBody AnswerDto answerDto, HttpServletRequest request)
    {
        AnswerDto answerDtoResponse = answerService.saveAnswer(
                answerDto);

        LOGGER.info("호출 API: " + "create Answer" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(answerDtoResponse);
    }

    @GetMapping()
    public ResponseEntity<AnswerDto> getAnswer(Long id, HttpServletRequest request)
    {
        AnswerDto answerDtoResponse = answerService.getAnswer(id);

        LOGGER.info("호출 API: " + "get Answer" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(answerDtoResponse);
    }

    @PutMapping()
    public ResponseEntity<AnswerDto> updateAnswer(
            @RequestBody  AnswerDto answerDto, HttpServletRequest request) throws Exception
    {
        AnswerDto answerDtoResponse = answerService.updateAnswer(answerDto.getId(),
                answerDto);

        LOGGER.info("호출 API: " + "update Answer" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body(answerDtoResponse);
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteAnswer (Long id, HttpServletRequest request) throws Exception
    {
        answerService.deleteAnswer(id);

        LOGGER.info("호출 API: " + "delete Answer" + " 접속자 IP: " + request.getRemoteAddr() + ", 최초 접속 시간: " +  LocalDateTime.now());

        return ResponseEntity.status(HttpStatus.OK).body("성공적으로 삭제 되었습니다.");
    }
}
