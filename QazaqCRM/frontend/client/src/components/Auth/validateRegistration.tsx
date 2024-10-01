export const validateRegistration = (values: any) => {
	const errors: any = {};

	if (!values.name) {
		errors.name = 'Имя обязательно';
	}

	if (!values.email) {
		errors.email = 'Email обязателен';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Неверный формат email';
	}

	if (!values.password) {
		errors.password = 'Пароль обязателен';
	} else if (values.password.length < 6) {
		errors.password = 'Пароль должен содержать минимум 6 символов';
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = 'Подтверждение пароля обязательно';
	} else if (values.password !== values.confirmPassword) {
		errors.confirmPassword = 'Пароли не совпадают';
	}

	return errors;
};
