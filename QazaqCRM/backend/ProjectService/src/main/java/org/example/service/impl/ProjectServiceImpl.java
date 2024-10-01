package org.example.service.impl;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.example.dto.ProjectDTO;
import org.example.model.Project;
import org.example.repository.ProjectRepository;
import org.example.service.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;


    @Override
    public void addProject(ProjectDTO project) {

    }

    @Override
    public Project getProjectById(UUID id) {
        return null;
    }

    @Override
    public List<Project> getProjects() {
        return List.of();
    }

    @Override
    public void updateProject(UUID id, ProjectDTO project) {

    }

    @Override
    public void deleteProject(UUID id) {

    }
}
