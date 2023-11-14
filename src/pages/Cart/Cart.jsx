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
	return (
		<CartDiv>
			<CartTitleDiv>
				<CartTitleH2>Shopping Cart</CartTitleH2>
			</CartTitleDiv>
			<CartContentsDiv>
				<CartItemsDiv>
					<CartItem />
					<CartItem />
					<CartItem />
				</CartItemsDiv>
				<CartSummary btnText="Checkout" />
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Cart;
