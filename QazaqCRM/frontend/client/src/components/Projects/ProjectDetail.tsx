import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/api/apiService';

interface ProjectDetailProps {
    project: any;
    onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await apiService.getTasksByProjectId(project.id); // Получение задач по ID проекта
            setTasks(tasks);
        };
        fetchTasks();
    }, [project]);

    return (
        <div className="project-detail">
            <h2>{project.name}</h2>
            <button onClick={onClose}>Закрыть</button>
            <h3>Задачи</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetail;
