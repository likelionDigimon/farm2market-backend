package com.springboot.farm2marketbackend.data.dao;

import com.springboot.farm2marketbackend.data.entity.Answer;

import java.util.List;

public interface AnswerDAO {
    Answer insertAnswer(Answer answer);
    Answer selectAnswer(Long id);
    Answer updateAnswer(Answer answer) throws Exception;
    void deleteAnswer(Long id) throws Exception;
    List<Answer> getAllApplications();
}
