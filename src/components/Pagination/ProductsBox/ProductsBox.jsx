import React from 'react';
import { ItemBox, ProductList } from './ProductsBox.style';
import PageButton from '../PageButton';

const generateImgUrl = (dataTitle, index) => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return dataTitle === 'OUTER'
		? `/assets/jacket_${actualIndex}/jacket_${actualIndex}_thumb.jpg`
		: `/assets/knit_${actualIndex}/knit_${actualIndex}_thumb.jpg`;
};

const ProductItem = ({ dataTitle, index, price, itemTitle }) => (
	<ItemBox>
		<div>
			<img src={generateImgUrl(dataTitle, index)} alt=" " />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</ItemBox>
);

const ProductsBox = ({ dataTitle }) => {
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
					<ProductItem key={item.id} dataTitle={dataTitle} {...item} />
				))}
			</ProductList>
			<PageButton />
		</>
	);
};

export default ProductsBox;
