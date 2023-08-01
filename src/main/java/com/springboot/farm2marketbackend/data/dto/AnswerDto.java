package com.springboot.farm2marketbackend.data.dto;

import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
public class AnswerDto extends BaseEntityDto{
    private Long id;
    private String author;

    private String title;
    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}