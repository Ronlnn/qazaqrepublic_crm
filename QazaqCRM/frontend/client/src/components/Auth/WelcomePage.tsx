import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import Logo from '../../assets/logo.png';
import { login } from '../../features/userSlice.tsx';
import { apiService } from '../../services/api/apiService.ts';
import BaseButton from '../BaseButton/BaseButton.tsx';
import BaseInput from '../BaseInput/BaseInput.tsx';
import { LoginFormValues, validate } from './formValidation.tsx';
import './WelcomePage.scss';

const WelcomePage: React.FC<InjectedFormProps<LoginFormValues>> = ({
  handleSubmit,
  invalid,
}) => {
  const dispatch = useDispatch();
  const [messageError, setMessageError] = useState<string>('');
  const [redirectToHome, setRedirectToHome] = useState<boolean>(false);
  const [redirectToRegister, setRedirectToRegister] = useState<boolean>(false);

  const authorize = async (params: LoginFormValues) => {
    setMessageError('');
    try {
      const token = await apiService.login(params.username, params.password);
      dispatch(login({ username: params.username, loggedIn: true }));
      localStorage.setItem('token', token);
      setRedirectToHome(true);
    } catch (error: any) {
      setMessageError(`Ошибка при отправке запроса: ${error.message}`);
    }
  };

  if (redirectToHome) {
    return <Navigate to='/' />;
  }

  if (redirectToRegister) {
    return <Navigate to='/register' />;
  }

  return (
    <div className='WelcomePage'>
      <div className='branding'>
        <img src={Logo} alt='Логотип' className='logo' />
        <p className='brand-name'>QazaQRepublic</p>
      </div>
      <form
        className='Login__form'
        onSubmit={handleSubmit(authorize)}
        autoComplete='off'
      >
        <h1 className='title'>Авторизация</h1>
        <div className='field'>
          <Field
            name='username'
            component={BaseInput}
            type='string'
            placeholder='Введите Login'
          />
          <Field name='Login' component='div' className='error' />
        </div>

        <div className='field'>
          <Field
            name='password'
            component={BaseInput}
            type='password'
            placeholder='Введите Пароль'
            isPassword={true}
          />
          <Field name='password' component='div' className='error' />
        </div>

        <BaseButton type='submit' disabled={invalid} buttonText='Войти' />
      </form>
      <div className='error-message'>{messageError}</div>
      <button
        onClick={() => setRedirectToRegister(true)}
        className='register-button'
      >
        Нет аккаунта? Зарегистрироваться
      </button>
    </div>
  );
};

export default reduxForm<LoginFormValues>({ form: 'loginForm', validate })(
  WelcomePage
);
