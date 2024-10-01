package org.example.service;

import org.example.dto.ProjectDTO;
import org.example.model.Project;

import java.util.List;
import java.util.UUID;

public interface ProjectService {
    void addProject(ProjectDTO project);
    Project getProjectById(UUID id);
    List<Project> getProjects();
    void updateProject(UUID id, ProjectDTO project);
    void deleteProject(UUID id);

}
