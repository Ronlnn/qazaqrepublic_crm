package org.example.service;

import org.example.model.Task;
import org.example.dto.TaskDTO;

import java.util.List;
import java.util.UUID;

public interface TaskService {

    void addTask(TaskDTO task);
    Task getTaskById(UUID id);
    List<Task> getTasks();
    void updateTask(UUID id, TaskDTO task);
    void deleteTask(UUID task);

}
