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
import CartHeader from '../../components/Cart/CartHeader/CartHeader';
import { useState } from 'react';

const Cart = () => {
	const cartItem = useSelector((state) => state.cart);
	const [checkedItemsId, setCheckedItemsId] = useState([]);

	const checkedSingleItemHandler = (id, checked) => {
		if (checked) {
			setCheckedItemsId((prev) => [...prev, id]);
		} else setCheckedItemsId(checkedItemsId.filter((itemId) => itemId !== id));
	};
	const checkedAllItemHandler = (allChecked) => {
		if (allChecked) {
			const allItemsId = cartItem.map((item) => item.id);
			setCheckedItemsId(allItemsId);
		} else {
			setCheckedItemsId([]);
		}
	};
	return (
		<CartDiv>
			<CartTitleDiv>
				<CartTitleH2>Shopping Cart</CartTitleH2>
			</CartTitleDiv>
			<CartContentsDiv>
				<CartItemsDiv>
					<CartHeader
						checkedAllItemHandler={checkedAllItemHandler}
						checkedItemsId={checkedItemsId}
						cartItem={cartItem}
					/>
					<ul>
						{cartItem.map((item, index) => (
							<CartItem
								key={index}
								item={item}
								checkedSingleItemHandler={checkedSingleItemHandler}
								checkedItemsId={checkedItemsId}
								cartItem={cartItem}
							/>
						))}
					</ul>
				</CartItemsDiv>
				<CartSummary btnText="Checkout" />
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Cart;
