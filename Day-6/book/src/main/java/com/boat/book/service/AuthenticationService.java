// AuthenticationService.java
package com.boat.book.service;

import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.boat.book.model.AuthenticationResponse;
import com.boat.book.model.Token;
import com.boat.book.model.User;
import com.boat.book.repository.TokenRepository;
import com.boat.book.repository.UserRepository;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository userRepository,
                                   PasswordEncoder passwordEncoder,
                                   JwtService jwtService,
                                   TokenRepository tokenRepository,
                                   AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.tokenRepository = tokenRepository;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(User request) {
        // Check if user already exists
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return new AuthenticationResponse(null, null, "User already exists");
        }

        // Create a new user
        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        // Save the user to the repository
        user = userRepository.save(user);

        // Generate JWT token for the user
        String jwt = jwtService.generateToken(user);

        // Save user token
        saveUserToken(user.getId(), jwt, user);

        // Return authentication response with user ID, JWT token, and message
        return new AuthenticationResponse(user.getId(), jwt, "User registration was successful");
    }

    public AuthenticationResponse authenticate(User request) {
        // Authenticate user credentials
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()));

        // Find user by username
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();

        // Generate JWT token for the user
        String jwt = jwtService.generateToken(user);

        // Revoke all existing tokens for the user
        revokeAllTokenByUser(user);

        // Save new user token
        saveUserToken(user.getId(), jwt, user);

        // Return authentication response with user ID, JWT token, and message
        return new AuthenticationResponse(user.getId(), jwt, "User login was successful");
    }

    private void revokeAllTokenByUser(User user) {
        List<Token> validTokens = tokenRepository.findAllTokensByUser(user.getId());
        if (!validTokens.isEmpty()) {
            validTokens.forEach(t -> t.setLoggedOut(true));
            tokenRepository.saveAll(validTokens);
        }
    }

    private void saveUserToken(Long userId, String jwt, User user) {
        Token token = new Token();
        token.setToken(jwt);
        token.setLoggedOut(false);
        token.setUser(user);
        tokenRepository.save(token);
    }
}
