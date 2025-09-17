package com.example.bank.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtil {

    @Value("${app.jwt-secret}")
    private String jwtSecret;

    @Value("${app.jwt-expiration-ms}")
    private long jwtExpirationMs;

    private SecretKey getKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    // ✅ Generate JWT
    public String generateToken(UUID userId) {
        return Jwts.builder()
                .subject(userId.toString())  // replaces setSubject
                .issuedAt(new Date())        // replaces setIssuedAt
                .expiration(new Date(System.currentTimeMillis() + jwtExpirationMs)) // replaces setExpiration
                .signWith(getKey())          // no need to pass SignatureAlgorithm with SecretKey
                .compact();
    }

    // ✅ Validate and extract UserId
    public UUID validateAndGetUserId(String token) {
        Jws<Claims> claims = Jwts.parser()
                .verifyWith(getKey())   // replaces parserBuilder().setSigningKey()
                .build()
                .parseSignedClaims(token);

        String subject = claims.getPayload().getSubject();
        return UUID.fromString(subject);
    }

    // ✅ Extra helper methods

    public boolean isTokenExpired(String token) {
        Date expiration = Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getExpiration();
        return expiration.before(new Date());
    }

    public String getUserIdFromToken(String token) {
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}
