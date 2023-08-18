package com.springboot.farm2marketbackend.service;

import com.springboot.farm2marketbackend.data.entity.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface UserDetailsService{

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

}
