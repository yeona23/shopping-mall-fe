import { useEffect, useState } from 'react';
import {
	getProducts,
	getUserSellProducts,
	updateDiscount,
	updateStock,
} from '../../../api/productApi';
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

	const fetchGetSellProducts = async () => {
		const response = await getUserSellProducts();

		setSellerProductList(response);
	};

	useEffect(() => {
		fetchGetSellProducts();
	}, []);

	const countHandler = (type, label, productId) => {
		setSellerProductList(
			sellerProductList.map((product) => {
				if (product.productId === productId) {
					let newValue =
						label === 'discount' ? product.discount : product.stock;
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

	const updateDiscountAndStock = async (productId, newDiscount, newStock) => {
		try {
			const discountResponse = await updateDiscount(productId, newDiscount);
			const stockResponse = await updateStock(productId, newStock);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<SellerListContainer>
			<ul>
				{sellerProductList &&
					sellerProductList.map((product) => (
						<SellerListItem key={product.productId}>
							<ImgWrap>
								<img src={product?.productImg[1]} alt="" />
							</ImgWrap>
							<ItemInfoWrap>
								<ItemTitle>{product.name}</ItemTitle>
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
											value={product.discount}
											name="discount"
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
												countHandler('minus', 'stock', product.productId)
											}>
											-
										</button>
										<input type="text" value={product.stock} name="stock" />
										<button
											onClick={() =>
												countHandler('plus', 'stock', product.productId)
											}>
											+
										</button>
									</div>
									<span>개</span>
								</StockWrap>
							</ItemInfoWrap>
							<PriceAndButtonsWrap>
								<div>{product.price?.toLocaleString()}원</div>
								<ButtonsWrap>
									<Button
										onClick={() => deleteProductHandler(product.productId)}>
										삭제
									</Button>
									<Button
										onClick={() =>
											updateDiscountAndStock(
												product.productId,
												product.discount,
												product.stock,
											)
										}>
										저장
									</Button>
								</ButtonsWrap>
							</PriceAndButtonsWrap>
						</SellerListItem>
					))}
			</ul>
		</SellerListContainer>
	);
};

export default SellerList;
