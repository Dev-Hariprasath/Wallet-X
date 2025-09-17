package com.example.bank.repository;

import com.example.bank.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {
    List<Transaction> findBySenderAccount_Id(UUID accountId);
    List<Transaction> findByReceiverAccount_Id(UUID accountId);
}
