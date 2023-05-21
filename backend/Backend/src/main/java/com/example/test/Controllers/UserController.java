package com.example.test.Controllers;

import com.example.test.Request.RegisterRequest;
import com.example.test.Request.UserDTO;
import com.example.test.Request.UserRequest;
import com.example.test.Response.APIResponse;
import com.example.test.Response.Response;
import com.example.test.ServiceImpl.ConfirmationService;
import com.example.test.ServiceImpl.EmailSenderImplementation;
import com.example.test.ServiceImpl.UserServiceImplentation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
@Slf4j

public class UserController {
    private final UserServiceImplentation service;
    private final ConfirmationService confirmationService;

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<APIResponse<Response>> register(@RequestBody RegisterRequest request) {
        APIResponse<Response> signup = new APIResponse<>(service.register(request));
            return new ResponseEntity<>(signup,HttpStatus.CREATED);
         //tizeti.com

}
    @PostMapping("/authenticate")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<APIResponse<Response>> authenticate(@RequestBody UserRequest request) {
        APIResponse<Response> apiResponse = new APIResponse<>(service.authenticate(request));
        return new ResponseEntity<>(apiResponse, HttpStatus.OK);
    }
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @GetMapping("/token/{token}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<APIResponse<UserDTO>> generateOtp(@PathVariable String token) {
        APIResponse<UserDTO> responseAPIResponse = new APIResponse<>(confirmationService.confirmationLink(token));
        return new ResponseEntity<>(responseAPIResponse,HttpStatus.OK);

    }



}

