import React from 'react';
import {
	CartSummaryDiv,
	CartSummaryOptionDiv,
	CartSummaryTitleH3,
} from './CartSummary.style';
import Button from '../CartUI/Button';
import { useSelector } from 'react-redux';

const CartSummary = ({ children, btnText, checkedItemsId }) => {
	const state = useSelector((state) => state.cart);
	let totalPrice;
	state.length !== 0
		? (totalPrice = state
				.map((item) => item.quantity * item.price)
				.reduce((cur, add) => cur + add))
		: (totalPrice = 0);
	return (
		<CartSummaryDiv
			style={{ position: 'sticky', top: '60px', right: '0', height: '100%' }}>
			<CartSummaryTitleH3>Cart Summary</CartSummaryTitleH3>
			{children}
			<CartSummaryOptionDiv>
				<p>Subtotal</p>
				<em>₩{totalPrice}</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Delivery cost</p>
				<em>Free</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Discount</p>
				<em>₩0</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>TOTAL</p>
				<em>₩{totalPrice}</em>
			</CartSummaryOptionDiv>
			<Button size="100%" checkedItemsId={checkedItemsId}>
				{btnText}
			</Button>
		</CartSummaryDiv>
	);
};

export default CartSummary;
