package com.example.bank.controller;

import com.example.bank.dto.TransferRequest;
import com.example.bank.entity.Account;
import com.example.bank.service.AccountService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    private UUID extractUserId(HttpServletRequest req) {
        Object attr = req.getAttribute("userId"); if (attr == null) throw new IllegalArgumentException("Invalid token"); return (UUID) attr;
    }

    @GetMapping("/info")
    public ResponseEntity<?> info(HttpServletRequest req) {
        UUID userId = extractUserId(req);
        Account account = accountService.getAccountByUserId(userId);
        var user = account.getUser();
        return ResponseEntity.ok(Map.of(
                "accountId", account.getId(),
                "firstName", user.getFirstName(),
                "lastName", user.getLastName(),
                "balance", account.getBalance()
        ));
    }

    @PostMapping("/transfer")
    public ResponseEntity<?> transfer(HttpServletRequest req, @Valid @RequestBody TransferRequest body) {
        UUID from = extractUserId(req);
        accountService.transfer(from, body.getTo(), body.getAmount());
        return ResponseEntity.ok(Map.of("message", "Transfer successful"));
    }

    @GetMapping("/transactions")
    public ResponseEntity<?> transactions(HttpServletRequest req) {
        UUID userId = extractUserId(req);
        var transactions = accountService.getTransactionsForUser(userId);
        var txs = transactions.stream().map(t -> {
            String type = t.getSenderAccount()==null ? "debit" : t.getReceiverAccount()==null ? "credit" : (t.getSenderAccount().getUser().getId().equals(userId) ? "debit" : "credit");
            var otherAccount = t.getSenderAccount()!=null && !t.getSenderAccount().getUser().getId().equals(userId) ? t.getSenderAccount() : t.getReceiverAccount();
            return Map.of(
                    "transactionId", t.getId(),
                    "type", type,
                    "accountInfo", Map.of(
                            "accountId", otherAccount != null ? otherAccount.getId() : null,
                            "userInfo", otherAccount != null ? Map.of(
                                    "firstName", otherAccount.getUser().getFirstName(),
                                    "lastName", otherAccount.getUser().getLastName(),
                                    "_id", otherAccount.getUser().getId(),
                                    "avatar", otherAccount.getUser().getAvatar()
                            ) : null
                    ),
                    "time", t.getTimestamp(),
                    "amount", t.getAmount()
            );
        }).toList();
        return ResponseEntity.ok(Map.of("transactions", txs));
    }
}
