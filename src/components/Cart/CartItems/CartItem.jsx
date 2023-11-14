import React from 'react';
import CartItemDesc from './CartItemDesc/CartItemDesc';
import { ItemDiv, ItemImgDiv, ItemHandleDiv } from './CartItem.style';
import Button from './../CartUI/Button';

const CartItem = () => {
	return (
		<ItemDiv>
			<ItemImgDiv>
				<img src="/assets/main1.jpg" alt="이미지" />
			</ItemImgDiv>
			<CartItemDesc/>
			<ItemHandleDiv>
        <p>item total price</p>
        <Button size='120px'>Remove</Button>
      </ItemHandleDiv>
		</ItemDiv>
	);
};

export default CartItem;
