package com.example.bank.dto;

import lombok.Data;
import jakarta.validation.constraints.*;

@Data
public class LoginRequest {
    @NotBlank
    @Email
    private String username;

    @NotBlank
    private String password;
}
