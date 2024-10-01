package org.example.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Email {
    private String recipientEmail;
    private String subject;
    private String text;

}