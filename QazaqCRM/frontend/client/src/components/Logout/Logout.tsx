import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice.tsx';
import { apiService } from '../../services/api/apiService.ts';
import BaseButton from '../BaseButton/BaseButton.tsx';
import './Logout.scss';

const Logout = () => {
	const dispatch = useDispatch();
	const [messageError, setMessageError] = useState<string>('');

	const handleLogout = async () => {
		try {
			const token = localStorage.getItem('token') ?? '';
			await apiService.logout(token);
			localStorage.removeItem('token');
			dispatch(logout());
		} catch (error: any) {
			setMessageError('Ошибка при выходе из системы');
		}
	};

	return (
		<div className='Logout'>
			<h1>Вы уверены, что хотите выйти?</h1>
			<BaseButton buttonText='Выход' onClick={handleLogout} />
			{messageError && <div className='error-message'>{messageError}</div>}
		</div>
	);
};

export default Logout;
