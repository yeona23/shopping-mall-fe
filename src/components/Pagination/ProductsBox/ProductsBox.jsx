import React, { useEffect, useState } from 'react';
import { ItemBox, ProductList } from './ProductsBox.style';
import PageButton from '../PageButton';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCTS } from '../../../slice/productSlice';
import { getProducts } from '../../../api/productApi';
import { useNavigate, useParams } from 'react-router-dom';

const PAGE_SIZE = 16;

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
	const { type, subType } = useParams();

	const [currentPage, setCurrentPage] = useState(1);

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

	const filteredProducts = products.filter((product) => {
		const productType = product.category && product.category.toLowerCase();
		const productSubCategory =
			product.subCategory && product.subCategory.toLowerCase();

		const productCategory = product.category && product.category.toLowerCase();

		const isCategoryMatch = productCategory === 'outer';
		const isTypeMatch = productType === (type ? type.toLowerCase() : '');
		const isSubTypeMatch =
			!subType ||
			(productSubCategory && productSubCategory === subType.toLowerCase());
		return isCategoryMatch && isTypeMatch && isSubTypeMatch;
	});

	console.log('products:', products);
	console.log('filteredProducts:', filteredProducts);

	const totalPages = Math.ceil(products.length / PAGE_SIZE);

	const displayProducts = products.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE,
	);

	const changePageHandler = (newPage) => {
		setCurrentPage(newPage);
	};

	return (
		<>
			<ProductList>
				{displayProducts.map((product) => (
					<ProductItem
						key={product.productId}
						thumbnail={product.productImg[1]}
						index={product.index}
						itemTitle={product.name}
						type={product.type.toLowerCase()}
						subType={product.subCategory}
						price={product.price}
						onClick={() => clickProductItem(product.productId)}
					/>
				))}
			</ProductList>
			<PageButton
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={changePageHandler}
			/>
		</>
	);
};

export default ProductsBox;
