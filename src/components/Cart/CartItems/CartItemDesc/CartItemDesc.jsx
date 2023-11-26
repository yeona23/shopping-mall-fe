import React from 'react';
import { ItemDescDiv, ItemNameP, ItemOptionsP } from './CartItemDesc.style';

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
