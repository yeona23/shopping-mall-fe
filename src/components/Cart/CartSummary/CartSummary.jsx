import React from 'react';
import {
	CartSummaryDiv,
	CartSummaryOptionDiv,
	CartSummaryTitleH3,
} from './CartSummary.style';
import Button from '../CartUI/Button';

const CartSummary = () => {
	return (
		<CartSummaryDiv>
			<CartSummaryTitleH3>Cart Summary</CartSummaryTitleH3>
			<CartSummaryOptionDiv>
				<p>Subtotal</p>
				<em>₩104,000</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Delivery cost</p>
				<em>Free</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>Discount</p>
				<em>₩2,600</em>
			</CartSummaryOptionDiv>
			<CartSummaryOptionDiv>
				<p>TOTAL</p>
				<em>₩101,600</em>
			</CartSummaryOptionDiv>
      <Button size='100%'>Checkout</Button>
		</CartSummaryDiv>
	);
};

export default CartSummary;
