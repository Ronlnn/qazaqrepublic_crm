package org.example.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "tasks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @NotNull
    @Column(name = "id")
    private UUID id;
    @NotBlank
    @Column(name = "title")
    private String title;
    @NotBlank
    @Column(name = "description")
    private String description;
    @NotNull
    @Column(name = "owner_id")
    private UUID ownerId;
    @NotNull
    @Column(name = "executor_id")
    private UUID executorId;
    @NotNull
    @Column(name = "status")
    private Status status;
    @NotNull
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @NotNull
    @Column(name = "deadline")
    private LocalDateTime deadline;
}
