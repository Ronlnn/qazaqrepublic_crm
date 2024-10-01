import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/api/apiService';
import ProjectDetail from './ProjectDetail'; // Импортируйте новый компонент
import './style/ProjectsPage.scss';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [newProjectName, setNewProjectName] = useState('');
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await apiService.getProjects();
            setProjects(projects);
        };
        fetchProjects();
    }, []);

    const handleCreateProject = async () => {
        if (newProjectName.trim()) {
            await apiService.createProject(newProjectName);
            setNewProjectName('');
            const projects = await apiService.getProjects();
            setProjects(projects);
        }
    };

    const handleDeleteProject = async (id: string) => {
        await apiService.deleteProject(id);
        const projects = await apiService.getProjects();
        setProjects(projects);
    };

    const handleOpenProject = (project: any) => {
        setSelectedProject(project);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
    };

    return (
        <div className='container'>
            <h1>Проекты</h1>
            <div className='input-container'>
                <input
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder='Название нового проекта'
                />
                <button onClick={handleCreateProject}>Создать проект</button>
            </div>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} onClick={() => handleOpenProject(project)}>
                        {project.name}
                        <button
                            className='delete-button'
                            onClick={() => handleDeleteProject(project.id)}
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
            {selectedProject && (
                <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
            )}
        </div>
    );
};

export default ProjectsPage;
