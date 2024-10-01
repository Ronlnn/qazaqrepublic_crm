package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.model.Email;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailConsumerService {
    private static final String PROCESSED_MESSAGES_KEY = "processed_messages";
    private final RedisTemplate<String, String> redisTemplate;
    private final EmailService emailService;

    @KafkaListener(topics = "send_email", groupId = "email_group")
    public void listen(Email event) {
        String message = event.toString();
        if (Boolean.TRUE.equals(redisTemplate.opsForSet().isMember(PROCESSED_MESSAGES_KEY, message))) {
            System.out.println("Message already processed: " + message);
            return;
        }
        emailService.sendEmail(event);
        redisTemplate.opsForSet().add(PROCESSED_MESSAGES_KEY, message);
    }
}
