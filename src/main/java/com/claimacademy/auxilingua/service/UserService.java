package com.claimacademy.auxilingua.service;

import com.claimacademy.auxilingua.domain.User;

import java.util.List;

public interface UserService {

    User save(User user);

    List<User> getList();

    boolean verify(User user);
}
