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
import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Cart/CartUI/Button';
import { setInitialData } from '../../slice/cartSlice';
import { getProducts } from '../../api/productApi';
import { SET_PRODUCTS } from '../../slice/productSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const [checkedItemsId, setCheckedItemsId] = useState([]);

	const fetchProduct = async () => {
		const response = await getProducts();

		dispatch(SET_PRODUCTS(response));
	};

	useEffect(() => {
		dispatch(setInitialData());

		console.log('changed');
	}, [dispatch]); // 옵션 변경됐을 때 다시 불러올 수 있도록(put할때 ?)

	useEffect(() => {
		fetchProduct();
	}, []);

	const cartItem = useSelector((state) => state.cart);
	const products = useSelector((state) => state.product);

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
									products={products}
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
				<CartSummary
					btnText="주문하기"
					checkedItemsId={checkedItemsId}
					products={products}
				/>
			</CartContentsDiv>
		</CartDiv>
	);
};

export default Cart;
