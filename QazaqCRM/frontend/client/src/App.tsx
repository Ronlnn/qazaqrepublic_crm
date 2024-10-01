import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/Auth/RegistrationPage';
import WelcomePage from './components/Auth/WelcomePage';
import Layout from './components/Layout/Layout';
import { menuItems } from './components/Layout/MenuItems';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					{menuItems.map((item, index) => (
						<Route key={index} path={item.path} element={item.component} />
					))}
				</Route>

				<Route path='/login' element={<WelcomePage />} />
				<Route path='/register' element={<RegistrationPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default connect()(App);
