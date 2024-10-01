import TasksPage from '../../Task/TasksPage.tsx';
import Logout from '../Logout/Logout.tsx';
import NotificationsService from '../NotificationsService/NotificationsService.tsx';
import Home from '../pages/Home.tsx';
import ProjectsPage from '../Projects/ProjectsPage.tsx';
export const menuItems = [
	{
		title: 'Home',
		path: '/',
		component: <Home />,
	},
	{
		title: 'Сервис отправки уведомлений',
		path: '/NotificationsService',
		component: <NotificationsService />,
	},
	{
		title: 'Сервис проектов',
		path: '/ProjectsPage',
		component: <ProjectsPage />,
	},
	{
		title: 'Сервис отправки уведомлений',
		path: '/TasksPage',
		component: <TasksPage />,
	},
	{
		title: 'Выйти',
		path: '/logout',
		closed: true,
		component: <Logout />,
	},
];
