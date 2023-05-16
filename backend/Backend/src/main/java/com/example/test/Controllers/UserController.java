package com.example.test.Controllers;

import com.example.test.Exceptions.EmailAddressAlreadyExistException;
import com.example.test.Request.OTPRequest;
import com.example.test.Request.RegisterRequest;
import com.example.test.Request.UserDTO;
import com.example.test.Request.UserRequest;
import com.example.test.Response.Response;
import com.example.test.ServiceImpl.EmailSenderImplementation;
import com.example.test.ServiceImpl.UserServiceImplentation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
@Slf4j
public class UserController {
    private final UserServiceImplentation service;
    private final EmailSenderImplementation emailSenderImplementation;

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> register(HttpSession session, @RequestBody RegisterRequest request) {

        try {
            UserDTO signup = service.register(request);
            emailSenderImplementation.sendEmail(request.getEmail(),session);
            log.info("OTP{}",session);
            return ResponseEntity.ok(signup);
        } catch (EmailAddressAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email Already Exists");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }

         //tizeti.com

}
    @PostMapping("/authenticate")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Response> authenticate(@RequestBody UserRequest request) {
        return new ResponseEntity<>(service.authenticate(request),HttpStatus.OK);

    }
    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @PostMapping("/otp")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Response> generateOtp(HttpSession session, @RequestBody OTPRequest otpAuthentication) {
        Object details = emailSenderImplementation.otpVerication(session,otpAuthentication.getOtp());
        if(details.equals("Success")) {
            return ResponseEntity.ok().body(
                    Response.builder()
                            .message("SUCCESS").build()
            );
        }else{
            return ResponseEntity.badRequest().body(
                    Response.builder()
                            .message("ERROR").build()
            );
        }
    }



}

