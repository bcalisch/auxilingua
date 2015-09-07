package com.claimacademy.auxilingua.repository;

import com.claimacademy.auxilingua.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
