import React, { useEffect, useState } from 'react';
import { apiService } from '../../services/api/apiService';
import './style/NotificationsService.scss';

const NotificationsService: React.FC = () => {
	const [notifications, setNotifications] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Загрузка статусов уведомлений
	useEffect(() => {
		const fetchNotifications = async () => {
			try {
				const notificationsData = await apiService.getNotifications(); // запрос на сервер для получения уведомлений
				setNotifications(notificationsData);
				console.log('Notifications received:', notificationsData);
			} catch (error) {
				console.error('Error fetching notifications:', error);
				setError('Ошибка загрузки уведомлений');
			} finally {
				setLoading(false);
			}
		};

		fetchNotifications();
	}, []);

	// Отображение загрузки
	if (loading) {
		return <div className='loading'>Загрузка...</div>;
	}

	// Отображение ошибки
	if (error) {
		return <div className='error'>{error}</div>;
	}

	// Отображение списка уведомлений
	return (
		<div className='NotificationsService'>
			<h1>Статусы уведомлений</h1>
			<ul>
				{notifications.map((notification) => (
					<li key={notification.id}>
						<strong>Тема:</strong> {notification.subject} <br />
						<strong>Статус:</strong> {notification.status} <br />
						<strong>Email:</strong> {notification.recipient} <br />
						<strong>Дата отправки:</strong> {notification.sentAt}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NotificationsService;
