import { useDispatch, useSelector } from 'react-redux';
import CartItem from './../../components/Cart/CartItems/CartItem';
import CartSummary from './../../components/Cart/CartSummary/CartSummary';
import {
	CartCheckedDeleteDiv,
	CartContentsDiv,
	CartDiv,
	CartItemsDiv,
	CartTitleDiv,
	CartTitleH2,
} from './Cart.style';
import CartHeader from '../../components/Cart/CartHeader/CartHeader';
import { useEffect, useState } from 'react';
import Button from '../../components/Cart/CartUI/Button';
import { setInitialData } from '../../slice/cartSlice';

const Cart = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setInitialData());
	}, []);
	const cartItem = useSelector((state) => state.cart);
	const [checkedItemsId, setCheckedItemsId] = useState([]);

	const checkedSingleItemHandler = (id, checked) => {
		if (checked) {
			setCheckedItemsId((prev) => [...prev, id]);
		} else setCheckedItemsId(checkedItemsId.filter((itemId) => itemId !== id));
	};
	const checkedAllItemHandler = (allChecked) => {
		if (allChecked) {
			const allItemsId = cartItem.map((item) => item.productId);
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
						{cartItem &&
							cartItem.map((item, index) => (
								<CartItem
									key={index}
									item={item}
									checkedSingleItemHandler={checkedSingleItemHandler}
									checkedItemsId={checkedItemsId}
									cartItem={cartItem}
								/>
							))}
					</ul>
					<CartCheckedDeleteDiv>
						<Button
							size="120px"
							checkedItemsId={checkedItemsId}
							setCheckedItemsId={setCheckedItemsId}>
							선택 삭제
						</Button>
					</CartCheckedDeleteDiv>
				</CartItemsDiv>
				<CartSummary btnText="주문하기" checkedItemsId={checkedItemsId} />
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Cart;
