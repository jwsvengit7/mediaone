package com.example.test.ServiceImpl;

import com.example.test.Entity.User;
import com.example.test.Entity.VerifyToken;
import com.example.test.Repositories.UserRepository;
import com.example.test.Repositories.VerifyRepository;
import com.example.test.Request.UserDTO;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConfirmationService {
    private final VerifyRepository verifyRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public UserDTO confirmationLink(String confirmationToken) {
        VerifyToken token = verifyRepository.findVerifyTokenByToken(confirmationToken);

        if (token != null) {
            User user = userRepository.findByEmail(token.getUser().getEmail()).orElse(null);
            assert user != null;
            user.setActivate(true);
            return modelMapper.map(userRepository.save(user), UserDTO.class);
        } else
            return null;
    }
}