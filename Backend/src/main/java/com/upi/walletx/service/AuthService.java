package com.example.bank.service;

import com.example.bank.entity.User;
import com.example.bank.entity.Account;
import com.example.bank.repository.UserRepository;
import com.example.bank.repository.AccountRepository;
import com.example.bank.config.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;
import java.util.UUID;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, AccountRepository accountRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @Transactional
    public String signup(String username, String password, String firstName, String lastName) {
        if (userRepository.findByUsername(username.toLowerCase()).isPresent()) {
            throw new IllegalArgumentException("User Already Exist");
        }
        String[] darkColors = {"#4D8FAC","#4C8E4C","#8B3E3E","#B45341","#B06A7A","#4D85A9","#424C54","#7A8EAB","#B5B590","#B0AE87"};
        User u = User.builder()
                .username(username.toLowerCase())
                .password(passwordEncoder.encode(password))
                .firstName(firstName)
                .lastName(lastName)
                .avatar(darkColors[new Random().nextInt(darkColors.length)])
                .build();
        u = userRepository.save(u);

        Account account = Account.builder()
                .user(u)
                .balance((double) (1 + new Random().nextInt(10000)))
                .build();
        accountRepository.save(account);

        return jwtUtil.generateToken(u.getId());
    }

    public String signin(String username, String password) {
        var opt = userRepository.findByUsername(username.toLowerCase());
        if (opt.isEmpty()) throw new IllegalArgumentException("Email not found");
        User u = opt.get();
        if (!passwordEncoder.matches(password, u.getPassword())) throw new IllegalArgumentException("Wrong Password!");
        return jwtUtil.generateToken(u.getId());
    }
}
