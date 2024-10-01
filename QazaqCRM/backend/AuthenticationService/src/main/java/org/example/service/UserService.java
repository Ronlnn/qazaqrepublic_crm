package org.example.service;

import org.example.exception.UserAlreadyExistsException;
import org.example.model.User;
import org.example.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.example.DTO.UserDTO;
import java.util.ArrayList;

@Service

public class UserService implements  UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final NotificationProducerService notificationService;
    private final ModelMapper modelMapper;
    @Autowired
    public UserService(UserRepository userRepository, NotificationProducerService notificationService) {
        this.userRepository = userRepository;
        this.notificationService = notificationService;
        this.modelMapper = new ModelMapper();
        this.passwordEncoder =  new BCryptPasswordEncoder();
    }

    public void registrationUser(UserDTO userDTO) throws UserAlreadyExistsException {
        if (identificationUser(userDTO.getUsername())) {
            throw new UserAlreadyExistsException("User already exists");
        }
        User user = modelMapper.map(userDTO, User.class);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        // Отправка уведомления о регистрации
        notificationService.sendEmail(userDTO.getEmail(),userDTO.getUsername());
    }

    public boolean identificationUser(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username){
        User user = getByUsername(username);
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(), user.getPassword(), new ArrayList<>());
    }
    public User getByUsername(String username)  {
        return userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
