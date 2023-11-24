import { useDispatch } from 'react-redux';
import ProductDetailDescription from '../ProductDetailDescription/ProductDetailDescription';
import ProductDetailMain from '../ProductDetailMain/ProductDetailMain';
import { useEffect } from 'react';
import { getProducts } from '../../../api/productApi';
import { SET_PRODUCTS } from '../../../slice/productSlice';

const ProductDetail = () => {
	const dispatch = useDispatch();

	const fetchProductsData = async () => {
		const response = await getProducts();

		dispatch(SET_PRODUCTS(response));
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	return (
		<>
			<ProductDetailMain />
			<ProductDetailDescription />
		</>
	);
};

export default ProductDetail;
