package com.springboot.farm2marketbackend.controller;

import com.springboot.farm2marketbackend.data.entity.User;
import com.springboot.farm2marketbackend.service.SignService;
import com.springboot.farm2marketbackend.service.UserDetailsService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mypage-api")
public class MyPageController {
    private final SignService signService;
    @Autowired
    public MyPageController(SignService signService) {
        this.signService = signService;
    }
    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 발급 받은 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "모든 회원 정보 조회")
    @GetMapping("/all-users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = signService.findAllUsers();
        return ResponseEntity.ok(users);
    }
}
