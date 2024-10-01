import React, { useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { apiService } from '../../services/api/apiService.ts';
import BaseButton from '../BaseButton/BaseButton.tsx';
import BaseInput from '../BaseInput/BaseInput.tsx';
import './RegisterPage.scss';
import { validateRegistration } from './validateRegistration.tsx';

type RegisterFormValues = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const RegisterPage: React.FC<InjectedFormProps<RegisterFormValues>> = ({
	handleSubmit,
	invalid,
}) => {
	const [messageSuccess, setMessageSuccess] = useState<string>('');
	const [messageError, setMessageError] = useState<string>('');

	const register = async (params: RegisterFormValues) => {
		setMessageSuccess('');
		setMessageError('');

		try {
			await apiService.register( params.username,  params.password, params.email,);
			setMessageSuccess('Регистрация успешна!');
		} catch (error: any) {
			setMessageError(`Ошибка при регистрации: ${error.message}`);
		}
	};

	return (
		<div className='RegisterPage'>
			<form
				className='Register__form'
				onSubmit={handleSubmit(register)}
				autoComplete='off'
			>
				<h1 className='title'>Регистрация</h1>
				<div>
					<Field
						name='username'
						component={BaseInput}
						type='username'
						placeholder='Введите имя'
					/>
				</div>
				<div>
					<Field
						name='email'
						component={BaseInput}
						type='email'
						placeholder='Введите Email'
					/>
				</div>
				<div>
					<Field
						name='password'
						component={BaseInput}
						type='password'
						placeholder='Введите Пароль'
						isPassword={true}
					/>
				</div>
				<div>
					<Field
						name='confirmPassword'
						component={BaseInput}
						type='password'
						placeholder='Подтвердите Пароль'
						isPassword={true}
					/>
				</div>
				<BaseButton
					type='submit'
					disabled={invalid}
					buttonText='Зарегистрироваться'
					className='BaseButton'
				/>
			</form>
			{messageSuccess && (
				<div className='success-message'>{messageSuccess}</div>
			)}
			{messageError && <div className='error-message'>{messageError}</div>}
		</div>
	);
};

export default reduxForm<RegisterFormValues>({
	form: 'registerForm',
	validate: validateRegistration,
})(RegisterPage);
