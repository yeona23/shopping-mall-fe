import React, { useState } from 'react';
import CartItemDesc from './CartItemDesc/CartItemDesc';
import {
	ItemDiv,
	ItemImgDiv,
	ItemHandleDiv,
	ItemCheckInput,
	ItemCheckDiv,
} from './CartItem.style';
import Button from './../CartUI/Button';
import { FiCheck } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const CartItem = ({ item, removeItemHandler }) => {
	const location = useLocation();
	const [isChecked, setIsChecked] = useState(false);
	const checkInputHandler = (e) => {
		setIsChecked(e.target.checked);
	};
	return (
		<ItemDiv>
			<ItemCheckDiv>
				{!location.pathname.includes('order') && (
					<div>
						<ItemCheckInput
							type="checkbox"
							id={item.id}
							onClick={checkInputHandler}
						/>
						<label htmlFor={item.id}>
							{isChecked && <FiCheck className="check" />}
						</label>
					</div>
				)}
				<ItemImgDiv>
					<img src={item.img} alt="이미지" />
				</ItemImgDiv>
			</ItemCheckDiv>
			<CartItemDesc item={item} />
			<ItemHandleDiv>
				<p>{item.price * item.quantity}</p>
				<Button
					size="120px"
					itemId={item.id}
					removeItemHandler={removeItemHandler}>
					Remove
				</Button>
			</ItemHandleDiv>
		</ItemDiv>
	);
};

export default CartItem;
