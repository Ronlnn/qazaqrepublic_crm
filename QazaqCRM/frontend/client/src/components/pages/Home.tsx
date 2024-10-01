import React from 'react';
import ProjectList from '../Projects/ProjectList';
// import TaskList from '../Tasks/TaskList';
import './Home.scss';

const Home: React.FC = () => {
	return (
		<div className='HomePage'>
			<h1>Welcome to CRM</h1>
			<ProjectList />
			{/* <TaskList /> */}
		</div>
	);
};
export default Home;
