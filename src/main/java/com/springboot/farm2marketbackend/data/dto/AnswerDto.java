package com.springboot.farm2marketbackend.data.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class AnswerDto{
    private Long id;
    private String author;

    private String title;
    private String content;
}
