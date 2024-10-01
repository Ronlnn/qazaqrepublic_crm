package org.example.model;

import lombok.*;
import jakarta.persistence.*;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "usr", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String username;
    private String password;
    private String email;
}
