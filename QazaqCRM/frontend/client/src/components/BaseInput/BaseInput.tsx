import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import BaseLabel from '../BaseLabel/BaseLabel';
import './BaseInput.scss';

interface BaseInputProps extends WrappedFieldProps {
	placeholder?: string;
	label?: string;
	isPassword?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = ({
	input,
	meta,
	placeholder,
	label,
	isPassword,
}) => (
	<div className='base-input-container'>
		{label && <BaseLabel text={label} />}
		<input
			className='base-input'
			type={isPassword ? 'password' : 'text'}
			{...input}
			placeholder={placeholder}
		/>
		{meta.touched && meta.error && (
			<span className='error-message'>{meta.error}</span>
		)}
	</div>
);

export default BaseInput;
