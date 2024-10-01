import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
	return (
		<div className='sidebar'>
			<ul>
				<li>
					<Link to='/'>Dashboard</Link>
				</li>
				<li>
					<Link to='/NotificationsService'>NotificationsService</Link>
				</li>
				<li>
					<Link to='/ProjectsPage'>ProjectForm</Link>
				</li>
				<li>
					<Link to='/TasksPage'>TasksPage</Link>
				</li>
				<li>
					<Link to='/logout'>Logout</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
