import React from 'react';
import { CartBtn } from './Button.style';

const Button = ({ children, size }) => {
	return (
		<>
			<CartBtn size={size}>{children}</CartBtn>
		</>
	);
};

export default Button;
