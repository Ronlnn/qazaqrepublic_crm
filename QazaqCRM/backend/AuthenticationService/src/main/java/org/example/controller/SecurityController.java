package org.example.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.example.DTO.LoginDTO;
import org.example.DTO.UserDTO;
import org.example.exception.UserAlreadyExistsException;
import org.example.jwt.JwtService;
import org.example.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class SecurityController {
    private final UserService userService;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    @PostMapping("/signUp")
    public ResponseEntity<?> registerUser(
            @RequestBody UserDTO user) {
            userService.registrationUser(user);
            return ResponseEntity.ok("Success");
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> authenticateUser(
            @RequestBody LoginDTO user) {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            String jwt = jwtService.generateToken(user.getUsername(),userService.getByUsername(user.getUsername()).getId());
            return ResponseEntity.ok(jwt);
    }
    @GetMapping()
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("This is a test message");
    }
}
