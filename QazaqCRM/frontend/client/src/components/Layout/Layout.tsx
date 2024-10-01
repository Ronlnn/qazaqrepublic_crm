import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
};

export default Layout;
