import React, { useEffect, useState } from 'react';
import CartItemDesc from './CartItemDesc/CartItemDesc';
import {
	ItemDiv,
	ItemImgDiv,
	ItemHandleDiv,
	ItemCheckDiv,
	ItemLi,
} from './CartItem.style';
import Button from './../CartUI/Button';
import { FiCheck } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { CartItemCheckInput } from '../../../pages/Cart/Cart.style';
import CheckboxInput from '../CartUI/CheckboxInput';

const CartItem = ({
	item,
	removeItemHandler,
	checkedSingleItemHandler,
	checkedItemsId,
	cartItem,
}) => {
	const location = useLocation();

	return (
		<ItemLi>
			<ItemCheckDiv>
				{!location.pathname.includes('order') && (
					<CheckboxInput
						item={item}
						checkedSingleItemHandler={checkedSingleItemHandler}
						checkedItemsId={checkedItemsId}
						cartItem={cartItem}
					/>
				)}
				<ItemImgDiv>
					<img src={item.img} alt="이미지" />
				</ItemImgDiv>
			</ItemCheckDiv>
			<CartItemDesc item={item} />
			<ItemHandleDiv>
				<p>₩{item.price * item.quantity}</p>
				<Button
					size="120px"
					itemId={item.id}
					removeItemHandler={removeItemHandler}>
					Remove
				</Button>
			</ItemHandleDiv>
		</ItemLi>
	);
};

export default CartItem;
