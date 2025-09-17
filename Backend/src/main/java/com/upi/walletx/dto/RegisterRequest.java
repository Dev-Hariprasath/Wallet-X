package com.example.bank.dto;

import lombok.Data;
import jakarta.validation.constraints.*;

@Data
public class RegisterRequest {
    @NotBlank
    @Size(max = 150)
    private String firstName;

    @NotBlank
    @Size(max = 150)
    private String lastName;

    @NotBlank
    @Email
    private String username;

    @NotBlank
    @Size(min = 8)
    private String password;
}
