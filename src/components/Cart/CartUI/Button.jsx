import React from 'react';
import { CartBtn } from './Button.style';
import { REMOVE_CART_ITEM } from '../../../slice/cartSlice';
import { useDispatch } from 'react-redux';

const Button = ({ children, size, itemId }) => {
	const dispatch = useDispatch();
	const btnClickHandler = () => {
		dispatch(REMOVE_CART_ITEM(itemId));
	};
	return (
		<>
			<CartBtn size={size} onClick={btnClickHandler}>
				{children}
			</CartBtn>
		</>
	);
};

export default Button;
