import React from 'react';
import './BaseButton.scss';

interface BaseButtonProps {
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	buttonText: string;
	disabled?: boolean;
	className?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({
	onClick,
	type = 'button',
	buttonText,
	disabled,
}) => (
	<button
		type={type}
		className='base-button'
		onClick={onClick}
		disabled={disabled}
	>
		{buttonText}
	</button>
);

export default BaseButton;
