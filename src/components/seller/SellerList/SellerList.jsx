import { useEffect, useState } from 'react';
import { getUserSellProducts } from '../../../api/productApi';
import {
	Button,
	ButtonsWrap,
	DiscountWrap,
	ImgWrap,
	ItemInfoWrap,
	ItemTitle,
	PriceAndButtonsWrap,
	SellerListContainer,
	SellerListItem,
	StockWrap,
} from './SellerList.style';

const SellerList = () => {
	const [sellerProductList, setSellerProductList] = useState([]);
	const [inputValue, setInputValue] = useState({
		discount: 1,
		stock: 0,
	});

	const fetchGetSellProducts = async () => {
		const response = await getUserSellProducts();

		setSellerProductList(response);
	};

	useEffect(() => {
		fetchGetSellProducts();
	}, []);

	const inputChangeHandler = (e) => {
		const { name, value } = e.target;

		setInputValue({ ...inputValue, [name]: value });
	};

	const countHandler = (type, label, productId) => {
		setSellerProductList(
			sellerProductList.map((product) => {
				if (product.productId === productId) {
					let newValue =
						label === 'discount' ? product.discount : product.productStock;
					newValue = Math.max(type === 'plus' ? newValue + 1 : newValue - 1, 0);
					return { ...product, [label]: newValue };
				}
				return product;
			}),
		);
	};

	const deleteProductHandler = (productId) => {
		setSellerProductList(
			sellerProductList.filter((product) => product.productId !== productId),
		);
	};

	return (
		<SellerListContainer>
			<ul>
				{sellerProductList &&
					sellerProductList.map((product) => (
						<SellerListItem key={product.productId}>
							<ImgWrap>
								<img src="" alt="" />
							</ImgWrap>
							<ItemInfoWrap>
								<ItemTitle>{product.productName}</ItemTitle>
								<div>카테고리 : {product.category}</div>
								<DiscountWrap>
									<label htmlFor="discount">할인율</label>
									<div>
										<button
											onClick={() =>
												countHandler('minus', 'discount', product.productId)
											}>
											-
										</button>
										<input
											type="text"
											value={inputValue.discount}
											name="discount"
											onChange={inputChangeHandler}
										/>
										<button
											onClick={() =>
												countHandler('plus', 'discount', product.productId)
											}>
											+
										</button>
									</div>
									<span>%</span>
								</DiscountWrap>
								<StockWrap>
									<label htmlFor="stock">재고</label>
									<div>
										<button
											onClick={() =>
												countHandler('minus', 'productStock', product.productId)
											}>
											-
										</button>
										<input
											type="text"
											value={product.productStock}
											name="stock"
											onChange={inputChangeHandler}
										/>
										<button
											onClick={() =>
												countHandler('plus', 'productStock', product.productId)
											}>
											+
										</button>
									</div>
									<span>개</span>
								</StockWrap>
							</ItemInfoWrap>
							<PriceAndButtonsWrap>
								<div>{product.productPrice?.toLocaleString()}원</div>
								<ButtonsWrap>
									<Button
										onClick={() => deleteProductHandler(product.productId)}>
										삭제
									</Button>
									<Button>저장</Button>
								</ButtonsWrap>
							</PriceAndButtonsWrap>
						</SellerListItem>
					))}
			</ul>
		</SellerListContainer>
	);
};

export default SellerList;
