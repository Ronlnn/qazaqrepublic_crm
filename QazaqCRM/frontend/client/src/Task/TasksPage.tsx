import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api/apiService';
import './style/TasksPage.css';

const TasksPage: React.FC<{ projectId: string }> = ({ projectId }) => {
	const [tasks, setTasks] = useState<any[]>([]);
	const [newTaskTitle, setNewTaskTitle] = useState('');
	const [newTaskUserId, setNewTaskUserId] = useState('');
	const [newTaskStatus, setNewTaskStatus] = useState('');
	const [newTaskDeadline, setNewTaskDeadline] = useState('');

	useEffect(() => {
		const fetchTasks = async () => {
			const tasksData = await apiService.getTasks();
			setTasks(tasksData.filter((task) => task.projectId === projectId));
		};

		fetchTasks();
	}, [projectId]);

	const handleCreateTask = async () => {
		if (
			newTaskTitle.trim() &&
			newTaskUserId &&
			newTaskStatus &&
			newTaskDeadline
		) {
			const taskData = {
				projectId,
				title: newTaskTitle,
				userId: newTaskUserId,
				status: newTaskStatus,
				deadline: newTaskDeadline,
			};

			console.log('Отправка данных на сервак:', taskData);

			await apiService.createTask(
				projectId,
				newTaskTitle,
				newTaskUserId,
				newTaskStatus,
				newTaskDeadline
			);

			// Очистка полей ввода
			setNewTaskTitle('');
			setNewTaskUserId('');
			setNewTaskStatus('');
			setNewTaskDeadline('');

			const tasksData = await apiService.getTasks();
			setTasks(tasksData.filter((task) => task.projectId === projectId));
		}
	};

	const handleDeleteTask = async (taskId: string) => {
		console.log('Удаление задачи с айди', taskId);

		await apiService.deleteTask(taskId);
		const tasksData = await apiService.getTasks();
		setTasks(tasksData.filter((task) => task.projectId === projectId));
	};

	return (
		<div className='tasks-container'>
			<h2>Tasks</h2>
			<div className='task-input'>
				<input
					value={newTaskTitle}
					onChange={(e) => setNewTaskTitle(e.target.value)}
					placeholder='New task title'
				/>
				<input
					value={newTaskUserId}
					onChange={(e) => setNewTaskUserId(e.target.value)}
					placeholder='User ID'
				/>
				<input
					value={newTaskStatus}
					onChange={(e) => setNewTaskStatus(e.target.value)}
					placeholder='Status'
				/>
				<input
					type='date'
					value={newTaskDeadline}
					onChange={(e) => setNewTaskDeadline(e.target.value)}
					placeholder='Deadline'
				/>
				<button onClick={handleCreateTask}>Create Task</button>
			</div>
			<ul className='task-list'>
				{tasks.map((task) => (
					<li key={task.id}>
						<span>{task.title}</span>
						<span>{task.status}</span>
						<span>{task.deadline}</span>
						<button onClick={() => handleDeleteTask(task.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TasksPage;
