package com.boat.book.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.boat.book.model.AuthenticationResponse;
import com.boat.book.model.User;
import com.boat.book.service.AuthenticationService;

@RestController
public class AuthenticationController {

    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

        @PostMapping("/register")
        public ResponseEntity<AuthenticationResponse> register(@RequestBody User request) {
            return ResponseEntity.ok(authService.register(request));
        }

        @PostMapping("/login")
        public ResponseEntity<AuthenticationResponse> login(@RequestBody User request) {
            return ResponseEntity.ok(authService.authenticate(request));
        }   


}
