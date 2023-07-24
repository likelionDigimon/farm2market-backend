package com.springboot.farm2marketbackend.data.dao.impl;

import com.springboot.farm2marketbackend.data.dao.AnswerDAO;
import com.springboot.farm2marketbackend.data.entity.Answer;
import com.springboot.farm2marketbackend.data.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AnswerDAOImpl implements AnswerDAO {
    private final AnswerRepository answerRepository;
    @Autowired
    public AnswerDAOImpl(AnswerRepository answerRepository){
        this.answerRepository = answerRepository;
    }

    @Override
    public Answer insertAnswer(Answer answer) {
        Answer savedAnswer = answerRepository.save(answer);
        return savedAnswer;
    }

    @Override
    public Answer selectAnswer(Long id){
        Answer selectedAnswer;
        if(answerRepository.existsById(id)){
            selectedAnswer = answerRepository.getById(id);
        }else{
            selectedAnswer = new Answer();
        }
        return selectedAnswer;

    }

    @Override
    public Answer updateAnswer(Answer answer) throws Exception {
        // id로 기존 데이터를 찾아온다.
        Optional<Answer> selectAnswer = answerRepository.findById(answer.getId());

        // 기존 데이터가 존재하는지 확인한다.
        if (selectAnswer.isPresent()) {
            Answer existingAnswer = selectAnswer.get();

            // 수정할 데이터를 설정한다.
            existingAnswer.setAuthor(answer.getAuthor());
            existingAnswer.setTitle(answer.getTitle());
            existingAnswer.setContent(answer.getContent());

            // 수정된 데이터를 데이터베이스에 저장한다.
            Answer updatedAnswer = answerRepository.save(existingAnswer);

            return updatedAnswer;
        } else {
            throw new Exception("해당 id에 해당하는 데이터가 존재하지 않습니다.");
        }
    }
    @Override
    public void deleteAnswer(Long id) throws Exception {
        Optional<Answer> selectedAnswer = answerRepository.findById(id);
        if(selectedAnswer.isPresent()){
            Answer answer = selectedAnswer.get();
            answerRepository.delete(answer);
        }else{
            throw new Exception();
        }

    }


    @Override
    public List<Answer> getAllApplications() {
        return answerRepository.findAll();
    }

}
