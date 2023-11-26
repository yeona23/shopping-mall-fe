import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../api/productApi';
import { SET_PRODUCTS } from '../../slice/productSlice';
import { setInitialData } from '../../slice/cartSlice';

const Order = () => {
	const dispatch = useDispatch();
	const fetchProduct = async () => {
		const response = await getProducts();

		dispatch(SET_PRODUCTS(response));
	};

	useEffect(() => {
		dispatch(setInitialData());
		fetchProduct();
	}, [dispatch]);

	const cartItem = useSelector((state) => state.cart);
	const products = useSelector((state) => state.product);
	return (
		<CartDiv>
			<CartTitleDiv>
				<CartTitleH2>Order List</CartTitleH2>
			</CartTitleDiv>
			<CartContentsDiv>
				<CartItemsDiv>
					<OrderInfo />
				</CartItemsDiv>
				<CartSummary btnText="Pay Now" products={products}>
					<ul>
						{cartItem &&
							cartItem.map((item, index) => (
								<CartItem key={index} item={item} products={products} />
							))}
					</ul>
				</CartSummary>
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Order;
