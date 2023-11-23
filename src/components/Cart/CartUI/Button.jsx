import React from 'react';
import { CartBtn } from './Button.style';
import {
	GET_INITIAL_ITEMS,
	REMOVE_CART_ITEM,
	REMOVE_CHECKED_ITEM,
	ORDER_CHECKED_ITEMS,
} from '../../../slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Button = ({
	children,
	size,
	itemId,
	checkedItemsId,
	setCheckedItemsId,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const btnClickHandler = () => {
		dispatch(REMOVE_CART_ITEM(itemId));
		if (checkedItemsId) {
			if (children === '선택 삭제') {
				dispatch(REMOVE_CHECKED_ITEM(checkedItemsId));
				//	checkedItemsId 도 삭제 되어야 함
				setCheckedItemsId((prev) =>
					prev.filter((checked) => checked != checkedItemsId),
				);
			} else {
				if (checkedItemsId.length !== 0) {
					dispatch(ORDER_CHECKED_ITEMS(checkedItemsId));
					navigate('/order');
				} else {
					window.alert('주문할 물품을 선택해주세요.');
				}
			}
		}
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
