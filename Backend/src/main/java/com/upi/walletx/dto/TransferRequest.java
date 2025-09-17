package com.example.bank.dto;

import lombok.Data;
import jakarta.validation.constraints.*;
import java.util.UUID;

@Data
public class TransferRequest {
    @NotNull
    private UUID to;

    @NotNull
    @DecimalMin(value = "0.01")
    private Double amount;
}
