import React from 'react';
import CartItemDesc from './CartItemDesc/CartItemDesc';
import {
	ItemImgDiv,
	ItemHandleDiv,
	ItemCheckDiv,
	ItemLi,
} from './CartItem.style';
import Button from './../CartUI/Button';
import { useLocation } from 'react-router-dom';
import CheckboxInput from '../CartUI/CheckboxInput';

const CartItem = ({
	item,
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
				<Button size="120px" itemId={item.productId}>
					삭제하기
				</Button>
			</ItemHandleDiv>
		</ItemLi>
	);
};

export default CartItem;
