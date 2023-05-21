package com.example.test.Repositories;

import com.example.test.Entity.VerifyToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerifyRepository extends JpaRepository<VerifyToken,Long> {
    VerifyToken findVerifyTokenByToken(String token);
}
