package com.springboot.farm2marketbackend.data.repository;

import com.springboot.farm2marketbackend.data.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
