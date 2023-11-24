import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { CartBtn } from '../CartUI/Button.style';
import { fetchProduct } from '../../../slice/productSlice';
import CartItemChangingOpitons from './CartItemChangingOptions/CartItemChangingOpitons';

const CartItem = ({
	item,
	checkedSingleItemHandler,
	checkedItemsId,
	cartItem,
}) => {
	const location = useLocation();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProduct());
	}, []); // 옵션 변경됐을 때 다시 불러올 수 있도록
	const products = useSelector((state) => state.product);

	const [isClicked, setIsClicked] = useState(false);
	const optionChangeHandler = () => {
		setIsClicked(!isClicked);
	};
	const optionCancelHandler = () => {
		setIsClicked(!isClicked);
	};

	const productIdentifyItem = products.find(
		(product) => product.productId === item.productId,
	);

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
					<img
						src={productIdentifyItem && productIdentifyItem.thumb_nail}
						alt="이미지"
					/>
				</ItemImgDiv>
			</ItemCheckDiv>
			<CartItemDesc item={item} productIdentifyItem={productIdentifyItem}>
				{isClicked && (
					<CartItemChangingOpitons
						cartProductIdx={item.cartProductIdx}
						optionCancelHandler={optionCancelHandler}
					/>
				)}
			</CartItemDesc>
			<ItemHandleDiv>
				<p>₩{(item.price * item.quantity).toLocaleString('ko-KR')}</p>
				<div style={{ textAlign: 'right' }}>
					{!isClicked && (
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
