package org.example.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.example.jwt.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final JwtService jwtService;

    @GetMapping("/Id")
    public ResponseEntity<?> getUserProfile(HttpServletRequest request) {
        UUID userId = jwtService.extractUserId(request);
        return ResponseEntity.ok(userId);
    }
}