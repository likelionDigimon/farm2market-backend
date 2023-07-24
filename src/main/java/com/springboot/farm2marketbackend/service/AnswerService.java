package com.springboot.farm2marketbackend.service;

import com.springboot.farm2marketbackend.data.dto.AnswerDto;
import com.springboot.farm2marketbackend.data.entity.Answer;

import java.util.List;

public interface AnswerService {
    AnswerDto getAnswer(Long id);
    AnswerDto saveAnswer(AnswerDto answerDto);
    AnswerDto updateAnswer(Long id, AnswerDto answerDto) throws Exception;
    void deleteAnswer(Long id) throws Exception;
    List<Answer> getAllApplications();
}
