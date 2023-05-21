package com.example.test.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "token_")
public class VerifyToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String token;
    @Column
    private Date expireTokenDate;
    @OneToOne
    private User user;
    public VerifyToken(String token, User user){
        this.token = token;
        this.expireTokenDate = new Date(System.currentTimeMillis()+180*1000);
        this.user = user;
    }

}
