package com.springboot.farm2marketbackend.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

// 예제 13.30
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SignInResultDto extends SignUpResultDto {

    private String token;
    private String name;

    @Builder
    public SignInResultDto(boolean success, int code, String msg, String token, String name) {
        super(success, code, msg);
        this.token = token;
        this.name = name;
    }

}
