import React from 'react';
import {
	CartContentsDiv,
	CartDiv,
	CartItemsDiv,
	CartTitleDiv,
	CartTitleH2,
} from '../Cart/Cart.style';
import CartSummary from '../../components/Cart/CartSummary/CartSummary';
import CartItem from '../../components/Cart/CartItems/CartItem';
import OrderInfo from '../../components/Cart/Order/OrderInfo';

const Order = () => {
	return (
		<CartDiv>
			<CartTitleDiv>
				<CartTitleH2>Order List</CartTitleH2>
			</CartTitleDiv>
			<CartContentsDiv>
				<CartItemsDiv>
					<OrderInfo />
				</CartItemsDiv>
				<CartSummary btnText="Pay Now">
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</CartSummary>
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Order;
