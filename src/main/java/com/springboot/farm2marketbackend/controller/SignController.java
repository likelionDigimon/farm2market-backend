package com.springboot.farm2marketbackend.controller;

import com.springboot.farm2marketbackend.data.dto.SignInResultDto;
import com.springboot.farm2marketbackend.data.dto.SignUpResultDto;
import com.springboot.farm2marketbackend.data.entity.User;
import com.springboot.farm2marketbackend.service.FindUserService;
import com.springboot.farm2marketbackend.service.SignService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiParam;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// 예제 13.28
@RestController
@RequestMapping("/sign-api")
public class SignController {

    private final Logger LOGGER = LoggerFactory.getLogger(SignController.class);
    private final SignService signService;
    private final FindUserService findUserService;

    @Autowired
    public SignController(SignService signService, FindUserService findUserService) {
        this.signService = signService;
        this.findUserService = findUserService;
    }

    @PostMapping(value = "/sign-in")
    public SignInResultDto signIn(
            @ApiParam(value = "ID", required = true) @RequestParam String id,
            @ApiParam(value = "Password", required = true) @RequestParam String password)
            throws RuntimeException {
        LOGGER.info("[signIn] 로그인을 시도하고 있습니다. id : {}, pw : ****", id);
        SignInResultDto signInResultDto = signService.signIn(id, password);

        if (signInResultDto.getCode() == 0) {

            LOGGER.info("[signIn] 정상적으로 로그인되었습니다. name : {}, id : {}, token : {}", signInResultDto.getName(), id,
                    signInResultDto.getToken());
        }
        return signInResultDto;
    }

    @PostMapping(value = "/sign-up")
    public SignUpResultDto signUp(
            @ApiParam(value = "ID", required = true) @RequestParam String id,
            @ApiParam(value = "비밀번호", required = true) @RequestParam String password,
            @ApiParam(value = "이름", required = true) @RequestParam String name,
            @ApiParam(value = "핸드폰번호", required = true) @RequestParam String phonenumber,
            @ApiParam(value = "권한", required = true) @RequestParam String role) {
        LOGGER.info("[signUp] 회원가입을 수행합니다. id : {}, password : ****, name : {}, role : {}, phonenumber : {}", id,
                name, role, phonenumber);
        SignUpResultDto signUpResultDto = signService.signUp(id, password, name, role, phonenumber);

        LOGGER.info("[signUp] 회원가입을 완료했습니다. id : {}", id);
        return signUpResultDto;
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PostMapping(value = "/logout")
    public ResponseEntity<Map<String, String>> logout(HttpServletRequest request, HttpServletResponse response) {
        // 로그아웃 처리 로직을 여기에 작성합니다.

        // Spring Security에 의한 인증을 로그아웃 처리
        SecurityContextHolder.clearContext(); // 세션 무효화

        // 쿠키 삭제 (Optional, 기존에 설정한 deleteCookies에 포함되어 있음)
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }
        }

        Map<String, String> map = new HashMap<>();
        map.put("message", "로그아웃이 성공적으로 처리되었습니다.");

        return ResponseEntity.ok(map);
    }

    @GetMapping("/find-id")
    public ResponseEntity<String> findIdByPhoneNumber(
            @RequestParam String phoneNumber,
            @RequestParam String name) {
        String id = findUserService.findIdByPhoneNumberAndName(phoneNumber, name);
        if (id != null) {
            return ResponseEntity.ok(id);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/find-password")
    public ResponseEntity<String> findPasswordByPhoneNumberAndNameAndUid(
            @RequestParam String phoneNumber,
            @RequestParam String name,
            @RequestParam String uid) {
        String password = findUserService.findPasswordByPhoneNumberAndNameAndUid(phoneNumber, name, uid);
        if (password != null) {
            return ResponseEntity.ok(password);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping(value = "/exception")
    public void exceptionTest() throws RuntimeException {
        throw new RuntimeException("접근이 금지되었습니다.");
    }

    @ExceptionHandler(value = RuntimeException.class)
    public ResponseEntity<Map<String, String>> ExceptionHandler(RuntimeException e) {
        HttpHeaders responseHeaders = new HttpHeaders();
        //responseHeaders.add(HttpHeaders.CONTENT_TYPE, "application/json");
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;

        LOGGER.error("ExceptionHandler 호출, {}, {}", e.getCause(), e.getMessage());

        Map<String, String> map = new HashMap<>();
        map.put("error type", httpStatus.getReasonPhrase());
        map.put("code", "400");
        map.put("message", "에러 발생");

        return new ResponseEntity<>(map, responseHeaders, httpStatus);
    }

}
