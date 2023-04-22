package com.example.mediaone.Controllers;

import com.example.mediaone.DTO.UserDTO;
import com.example.mediaone.ServicesImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/mediaone")
@RequiredArgsConstructor
public class UserController {
    private final UserServiceImpl userService;

    @PostMapping("/create")
    public ResponseEntity<Object> createUser(@RequestBody UserDTO userDTO){
        userService.create(userDTO);
        return new ResponseEntity<>("success", HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody UserDTO userDTO){
        userService.signin(userDTO);
        return new ResponseEntity<>("success", HttpStatus.OK);

    }
}
