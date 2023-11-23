import React, { useState } from 'react';
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
import { CartBtn } from '../CartUI/Button.style';
import CartItemChangingOpitons from './CartItemChangingOptions/CartItemChangingOpitons';

const CartItem = ({
	item,
	checkedSingleItemHandler,
	checkedItemsId,
	cartItem,
	products,
}) => {
	const location = useLocation();
	const [isClicked, setIsClicked] = useState(false);
	const orderLocation = location.pathname.includes('order');

	const optionChangeHandler = () => {
		setIsClicked(!isClicked);
	};

	const productIdentifyItem = products.find(
		(product) => product.productId === item.productId,
	);

	return (
		<ItemLi>
			<ItemCheckDiv>
				{!orderLocation && (
					<CheckboxInput
						item={item}
						checkedSingleItemHandler={checkedSingleItemHandler}
						checkedItemsId={checkedItemsId}
						cartItem={cartItem}
					/>
				)}
				<ItemImgDiv>
					<img
						src={productIdentifyItem && productIdentifyItem.productImg[1]}
						alt="이미지"
					/>
				</ItemImgDiv>
			</ItemCheckDiv>
			<CartItemDesc item={item} productIdentifyItem={productIdentifyItem}>
				{isClicked && (
					<CartItemChangingOpitons
						cartProductIdx={item.cartProductIdx}
						optionChangeHandler={optionChangeHandler}
					/>
				)}
			</CartItemDesc>
			<ItemHandleDiv>
				<p>₩{(item.price * item.quantity).toLocaleString('ko-KR')}</p>
				<div style={{ textAlign: 'right' }}>
					{!isClicked && !orderLocation && (
						<CartBtn
							style={{ marginBottom: '4px' }}
							onClick={optionChangeHandler}>
							옵션변경
						</CartBtn>
					)}
					<Button itemId={item.productId}>삭제하기</Button>
				</div>
			</ItemHandleDiv>
		</ItemLi>
	);
};

export default CartItem;
