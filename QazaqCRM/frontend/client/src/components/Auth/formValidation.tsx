export interface LoginFormValues {
	username: string;
	password: string;
}

export const validate = (values: LoginFormValues) => {
	const errors: Partial<LoginFormValues> = {};

	// if (!values.username {
	// 	errors.username = 'Введите email';
	// } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
	// 	errors.username = 'Некорректный email';
	// }

	if (!values.password) {
		errors.password = 'Введите пароль';
	} else if (values.password.length < 6) {
		errors.password = 'Пароль должен содержать минимум 6 символов';
	}

	return errors;
};
