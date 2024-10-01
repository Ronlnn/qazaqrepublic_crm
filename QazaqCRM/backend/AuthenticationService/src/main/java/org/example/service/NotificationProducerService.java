package org.example.service;

import lombok.RequiredArgsConstructor;
import org.example.model.Email;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationProducerService {

  private static final String TOPIC = "send_email";
  private final KafkaTemplate<String, Email> kafkaTemplate;

  public void sendEmail(String recipientEmail,String username) {
    Email email = new Email(recipientEmail,"registration", "Hello, "+ username+ "! You have successfully registered");
    kafkaTemplate.send(TOPIC, email);

  }
}