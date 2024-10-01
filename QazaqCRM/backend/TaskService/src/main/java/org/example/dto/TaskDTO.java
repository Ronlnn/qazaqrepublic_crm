package org.example.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public class TaskDTO {

    @NotBlank
    private String title;
    @NotBlank
    private String description;
    @NotNull
    @JsonProperty("owner_id")
    private UUID ownerId;
    @NotNull
    @JsonProperty("executor_id")
    private UUID executorId;
    @NotNull
    private LocalDateTime deadline;
}
