import React from 'react';
import './BaseLabel.scss';

interface BaseLabelProps {
	text: string;
}

const BaseLabel: React.FC<BaseLabelProps> = ({ text }) => (
	<label className='custom-label'>{text}</label>
);

export default BaseLabel;
