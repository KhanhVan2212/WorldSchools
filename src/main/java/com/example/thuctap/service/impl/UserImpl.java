package com.example.thuctap.service.impl;

import com.example.thuctap.entity.Users;
import com.example.thuctap.repository.UserRepository;
import com.example.thuctap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<Users> getAccount(Integer idKhachHang) {
        return this.userRepository.findById(idKhachHang);
    }


    @Override
    public Users addAccount(Users users) {
        return this.userRepository.save(users);
    }

    @Override
    public Users findAccountByEmail(String email) {
        return this.userRepository.findAccountByEmail(email);
    }

    @Override
    public Users findByEmailAndPassword(String email, String passWord) {
        return this.userRepository.findByEmailAndPassWord(email, passWord);
    }


}
