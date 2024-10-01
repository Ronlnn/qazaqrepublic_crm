package org.example.service.impl;

import lombok.AllArgsConstructor;
import org.example.model.Task;
import org.example.dto.TaskDTO;
import org.example.repository.TaskRepository;
import org.example.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {


    private final TaskRepository taskRepository;

    @Override
    public void addTask(TaskDTO task) {
//        task
    }

    @Override
    public Task getTaskById(UUID id) {
        return null;
    }


    @Override
    public List<Task> getTasks() {
        return List.of();
    }

    @Override
    public void updateTask(UUID id, TaskDTO task) {

    }

    @Override
    public void deleteTask(UUID task) {

    }
}
