import React, { useEffect, useState } from 'react';
import { ItemBox } from '../Pagination/ProductsBox/ProductsBox.style';
import {
	MoreBtn,
	SubThemeContainer,
	SubThemeList,
	SubThemeTitle,
} from './Main.style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCTS } from '../../slice/productSlice';
import { getProducts } from '../../api/productApi';

const ProductItem = ({ price, itemTitle, thumbnail, onClick }) => (
	<ItemBox onClick={onClick}>
		<div>
			<img src={thumbnail} alt={itemTitle} />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</ItemBox>
);

const SubThemeBox = ({ dataTitle }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [clickTypeBtn, setClickTypeBtn] = useState();

	const fetchProductsData = async () => {
		const response = await getProducts();
		dispatch(SET_PRODUCTS(response));
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	const products = useSelector((state) => state.product.slice(0, 8));

	let backgroundColor = '';
	if (dataTitle === 'outer' || dataTitle === 'bottom') {
		backgroundColor = 'var(--color-coconut)';
	}

	const clickTypeBtnHandler = () => {
		setClickTypeBtn(dataTitle);
		const url = `/products/?type=${dataTitle}`;
		navigate(url);
	};

	const clickProductItem = (product_id) => {
		const url = `/product/${product_id}`;
		navigate(url);
	};

	return (
		<>
			<SubThemeContainer backgroundColor={backgroundColor}>
				<SubThemeTitle>{dataTitle.toUpperCase()}</SubThemeTitle>
				<SubThemeList>
					{products.map((product) => (
						<ProductItem
							key={product.productId}
							thumbnail={product.productImg[1]}
							itemTitle={product.name}
							price={product.price}
							onClick={() => clickProductItem(product.productId)}
						/>
					))}
				</SubThemeList>
				<MoreBtn onClick={() => clickTypeBtnHandler(dataTitle)}>MORE</MoreBtn>
			</SubThemeContainer>
		</>
	);
};

export default SubThemeBox;
