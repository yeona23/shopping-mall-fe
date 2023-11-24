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
	const dispatch = useDispatch();
	const minusHandler = () => {
		if (item.quantity === 1) return;
		dispatch(MINUS_ITEM_QUANTITY(item));
	};
	const plusHandler = () => {
		dispatch(PLUS_ITEM_QUANTITY(item));
	};
	return (
		<ItemDescDiv>
			<ItemInfoDiv>
				<div>
					<ItemNameP>
						{productIdentifyItem && productIdentifyItem.name}
					</ItemNameP>
					<ItemOptionsP>Color: {item.color}</ItemOptionsP>
					<ItemOptionsP>Size: {item.size}</ItemOptionsP>
				</div>
				{children}
			</ItemInfoDiv>
			<ItemQuantityDiv>
				<ItemQuantityBtn onClick={minusHandler}>
					<FiMinus className="plus-minus" />
				</ItemQuantityBtn>
				<ItemQuantityInput
					type="number"
					value={item.quantity}
					min={1}
					max={100}
				/>
				<ItemQuantityBtn onClick={plusHandler}>
					<FiPlus className="plus-minus" />
				</ItemQuantityBtn>
			</ItemQuantityDiv>
		</ItemDescDiv>
	);
};

export default CartItemDesc;
