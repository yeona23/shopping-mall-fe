import React, { useEffect } from 'react';
import { ItemBox, ProductList } from './ProductsBox.style';
import PageButton from '../PageButton';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCTS } from '../../../slice/productSlice';
import { getProducts } from '../../../api/productApi';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ price, itemTitle, thumbnail, onClick }) => (
	<ItemBox onClick={onClick}>
		<div>
			<img src={thumbnail} alt={itemTitle} />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</ItemBox>
);

const ProductsBox = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const fetchProductsData = async () => {
		const response = await getProducts();
		dispatch(SET_PRODUCTS(response));
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	const products = useSelector((state) => state.product);

	const clickProductItem = (product_id) => {
		const url = `/product/${product_id}`;
		navigate(url);
	};

	return (
		<>
			<ProductList>
				{products.map((product) => (
					<ProductItem
						key={product.productId}
						thumbnail={product.productImg[1]}
						index={product.index}
						itemTitle={product.name}
						price={product.price}
						onClick={() => clickProductItem(product.productId)}
					/>
				))}
			</ProductList>
			<PageButton />
		</>
	);
};

export default ProductsBox;
