package com.example.bank.service;

import com.example.bank.entity.Account;
import com.example.bank.entity.Transaction;
import com.example.bank.repository.AccountRepository;
import com.example.bank.repository.TransactionRepository;
import com.example.bank.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public AccountService(AccountRepository accountRepository, TransactionRepository transactionRepository, UserRepository userRepository) {
        this.accountRepository = accountRepository;
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    public Account getAccountByUserId(UUID userId) {
        return accountRepository.findByUser_Id(userId).orElseThrow(() -> new IllegalArgumentException("Account not found"));
    }

    @Transactional
    public void transfer(UUID fromUserId, UUID toUserId, Double amount) {
        if (fromUserId.equals(toUserId)) throw new IllegalArgumentException("Can not send money to self");
        if (amount <= 0) throw new IllegalArgumentException("Invalid amount");

        var senderOpt = accountRepository.findByUserIdForUpdate(fromUserId);
        var receiverOpt = accountRepository.findByUserIdForUpdate(toUserId);
        if (senderOpt.isEmpty() || receiverOpt.isEmpty()) throw new IllegalArgumentException("Account not found");

        Account sender = senderOpt.get();
        Account receiver = receiverOpt.get();

        if (amount > sender.getBalance()) throw new IllegalArgumentException("Insufficient balance");

        amount = Math.round(amount * 100.0) / 100.0;

        sender.setBalance(Math.round((sender.getBalance() - amount) * 100.0) / 100.0);
        receiver.setBalance(Math.round((receiver.getBalance() + amount) * 100.0) / 100.0);

        Transaction txn = Transaction.builder()
                .senderAccount(sender)
                .receiverAccount(receiver)
                .amount(amount)
                .timestamp(Instant.now())
                .build();

        transactionRepository.save(txn);
        accountRepository.save(sender);
        accountRepository.save(receiver);
    }

    public List<Transaction> getTransactionsForUser(UUID userId) {
        var account = getAccountByUserId(userId);
        List<Transaction> sent = transactionRepository.findBySenderAccount_Id(account.getId());
        List<Transaction> received = transactionRepository.findByReceiverAccount_Id(account.getId());
        List<Transaction> all = new ArrayList<>();
        all.addAll(sent);
        all.addAll(received);
        all.sort(Comparator.comparing(Transaction::getTimestamp).reversed());
        return all;
    }
}
