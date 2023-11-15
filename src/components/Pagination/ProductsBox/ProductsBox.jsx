import React from 'react';
import { ItemBox, ProductList } from './ProductsBox.style';
import PageButton from '../PageButton';

const generateImgUrl = (index) => {
	const maxIndex = 10;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return `/assets/main${actualIndex}.jpg`;
};

const ProductItem = ({ index, price, itemTitle }) => (
	<ItemBox>
		<div>
			<img src={generateImgUrl(index)} alt=" " />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</ItemBox>
);

const ProductsBox = () => {
	const items = Array.from({ length: 16 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: 'gvbhdfgwysfuygsf',
		price: '65,000won',
	}));
	return (
		<>
			<ProductList>
				{items.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</ProductList>
			<PageButton />
		</>
	);
};

export default ProductsBox;
