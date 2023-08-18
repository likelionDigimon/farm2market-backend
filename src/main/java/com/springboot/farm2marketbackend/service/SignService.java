package com.springboot.farm2marketbackend.service;


import com.springboot.farm2marketbackend.data.dto.SignInResultDto;
import com.springboot.farm2marketbackend.data.dto.SignUpResultDto;
import com.springboot.farm2marketbackend.data.entity.User;

import java.util.List;

// 예제 13.24
public interface SignService {

    SignUpResultDto signUp(String id, String password, String name, String role, String phonenumber);

    SignInResultDto signIn(String id, String password) throws RuntimeException;
    List<User> findAllUsers();
}
