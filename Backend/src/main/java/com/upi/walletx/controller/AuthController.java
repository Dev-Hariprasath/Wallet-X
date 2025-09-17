package com.example.bank.controller;

import com.example.bank.dto.*;
import com.example.bank.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest req) {
        String token = authService.signup(req.getUsername(), req.getPassword(), req.getFirstName(), req.getLastName());
        return ResponseEntity.ok(java.util.Map.of("message","user created successfully","token", token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest req) {
        String token = authService.signin(req.getUsername(), req.getPassword());
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
