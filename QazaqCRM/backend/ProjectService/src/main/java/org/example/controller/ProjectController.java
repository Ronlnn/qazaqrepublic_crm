package org.example.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.dto.ProjectDTO;
import org.example.model.Project;
import org.example.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping()
    public List<Project> getAll() {
        return projectService.getProjects();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getById(@PathVariable UUID id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }

    @PostMapping()
    public void createTask(@Valid @RequestBody ProjectDTO project) {
        projectService.addProject(project);
    }

    @PatchMapping("/{id}")
    public void update(@PathVariable UUID id, @Valid @RequestBody ProjectDTO projectDetails) {
        projectService.updateProject(id, projectDetails);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        projectService.deleteProject(id);
    }
}
