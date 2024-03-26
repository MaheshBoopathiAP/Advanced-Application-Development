package com.boat.book.model;

public class AuthenticationResponse {

    private Long id;
    private String token;
    private String message;

    public AuthenticationResponse(Long id, String token, String message) {
        this.id = id;
        this.token = token;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getToken() {
        return token;
    }

    public String getMessage() {
        return message;
    }
}
