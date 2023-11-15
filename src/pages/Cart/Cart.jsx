import { useSelector } from 'react-redux';
import CartItem from './../../components/Cart/CartItems/CartItem';
import CartSummary from './../../components/Cart/CartSummary/CartSummary';
import {
	CartContentsDiv,
	CartDiv,
	CartItemsDiv,
	CartTitleDiv,
	CartTitleH2,
} from './Cart.style';

const Cart = () => {
	const cartItem = useSelector((state) => state.cart);

	return (
		<CartDiv>
			<CartTitleDiv>
				<CartTitleH2>Shopping Cart</CartTitleH2>
			</CartTitleDiv>
			<CartContentsDiv>
				<CartItemsDiv>
					{cartItem.map((item, index) => (
						<CartItem key={index} item={item} />
					))}
				</CartItemsDiv>
				<CartSummary btnText="Checkout" />
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Cart;
