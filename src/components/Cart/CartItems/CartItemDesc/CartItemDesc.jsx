import React, { useState } from 'react';
import {
	ItemDescDiv,
	ItemInfoDiv,
	ItemNameP,
	ItemOptionsP,
	ItemQuantityBtn,
	ItemQuantityDiv,
	ItemQuantityInput,
} from './CartItemDesc.style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
	MINUS_ITEM_QUANTITY,
	PLUS_ITEM_QUANTITY,
} from '../../../../slice/cartSlice';

const CartItemDesc = ({ item, children, productIdentifyItem }) => {
	return (
		<ItemDescDiv>
			<div>
				<ItemNameP>{productIdentifyItem && productIdentifyItem.name}</ItemNameP>
				<ItemOptionsP>색상: {item.color}</ItemOptionsP>
				<ItemOptionsP>사이즈: {item.size}</ItemOptionsP>
				<ItemOptionsP>수량: {item.quantity}</ItemOptionsP>
			</div>
			{children}
		</ItemDescDiv>
	);
};

export default CartItemDesc;
