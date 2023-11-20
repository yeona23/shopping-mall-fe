import { useEffect, useState } from 'react';
import { DescriptionSection, ImgWrap } from './ProductDetailDescription.style';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetailDescription = () => {
	const { productId } = useParams();

	const productsData = useSelector((state) => state.product);

	const productIdData = productsData.find(
		(product) => String(product.id) === String(productId),
	);

	return (
		<DescriptionSection>
			<p>{productIdData?.description}</p>
			<ul>
				{productIdData && (
					<ImgWrap>
						<img src={productIdData?.description_image} />
					</ImgWrap>
				)}
			</ul>
		</DescriptionSection>
	);
};

export default ProductDetailDescription;
