import { Link } from 'react-router-dom';
import BaseButton from '../BaseButton/BaseButton';
import './NotFound.scss';

const NotFoundPage = () => {
	return (
		<div className='not-found-page'>
			<h1>NotFoundPage!</h1>
			<p>авторизуйтесь.</p>
			<Link to='/login' className='authButton'>
				<BaseButton buttonText='Авторизоваться' />
			</Link>
		</div>
	);
};

export default NotFoundPage;
