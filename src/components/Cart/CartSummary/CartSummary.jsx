import React from 'react';
import {
	CartSummaryDiv,
	CartSummaryOptionDiv,
	CartSummaryTitleH3,
} from './CartSummary.style';
import Button from '../CartUI/Button';
import { useSelector } from 'react-redux';
import { calculOrigingTotalPrice } from '../../../utils/calculOrigingTotalPrice';

const CartSummary = ({ children, btnText, checkedItemsId, products }) => {
	const cartItems = useSelector((state) => state.cart);

	let totalPrice;
	cartItems.length !== 0
		? (totalPrice = cartItems
				.map((item) => item.quantity * item.price)
				.reduce((cur, add) => cur + add))
		: (totalPrice = 0);

	const originPrice = calculOrigingTotalPrice(cartItems, products);

	return (
		<CartSummaryDiv
			style={{ position: 'sticky', top: '60px', right: '0', height: '100%' }}>
			<CartSummaryTitleH3>Cart Summary</CartSummaryTitleH3>
			{children}
			<CartSummaryOptionDiv>
				<p>Subtotal</p>
				<em>₩{originPrice ? originPrice.toLocaleString() : 0}</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Delivery cost</p>
				<em>Free</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Discount</p>
				<em>
					₩{originPrice ? (originPrice - totalPrice).toLocaleString() : 0}
				</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p style={{ fontWeight: 'bold' }}>TOTAL</p>
				<em style={{ fontWeight: 'bold' }}>₩{totalPrice.toLocaleString()}</em>
			</CartSummaryOptionDiv>
			<Button size="100%" checkedItemsId={checkedItemsId}>
				{btnText}
			</Button>
		</CartSummaryDiv>
	);
};

export default CartSummary;
