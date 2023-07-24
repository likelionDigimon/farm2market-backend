package com.springboot.farm2marketbackend.data.dao.impl;

import com.springboot.farm2marketbackend.data.dao.QuestionDAO;
import com.springboot.farm2marketbackend.data.entity.Question;
import com.springboot.farm2marketbackend.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Optional;

@Component
public class QuestionDAOImpl implements QuestionDAO {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionDAOImpl(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }
    @Override
    public Question insertQuestion(Question Question) {
        Question savedQuestion = questionRepository.save(Question);

        return savedQuestion;
    }


    @Override
    public Question selectQuestion(Long id) {
        Question selectedQuestion;
        if(questionRepository.existsById(id)){
            selectedQuestion = questionRepository.getById(id);
        }else{
            selectedQuestion = new Question();
        }

        return selectedQuestion;
    }


    @Override
    public Question updateQuestion(Long id, String content) throws Exception {
        Optional<Question> selectedQuestion = questionRepository.findById(id);

        Question updatedQuestion;
        if (selectedQuestion.isPresent()) {
            Question Question = selectedQuestion.get();

              Question.setContent(content);
//            Question.setUpdatedAt(LocalDateTime.now());

            updatedQuestion = questionRepository.save(Question);
        } else {
            throw new Exception();
        }

        return updatedQuestion;
    }

    @Override
    public void deleteQuestion(Long id) throws Exception {
        Optional<Question> selectedQuestion = questionRepository.findById(id);

        if (selectedQuestion.isPresent()) {
            Question question = selectedQuestion.get();

            questionRepository.delete(question);
        } else {
            throw new Exception();
        }
    }
}
