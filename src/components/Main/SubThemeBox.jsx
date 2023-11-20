import React from 'react';
import { ItemBox } from '../Pagination/ProductsBox/ProductsBox.style';
import {
	MoreBtn,
	SubThemeContainer,
	SubThemeList,
	SubThemeTitle,
} from './Main.style';

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

const SubThemeBox = ({ dataTitle }) => {
	let backgroundColor = '';
	if (dataTitle === 'OUTER' || dataTitle === 'BOTTOM') {
		backgroundColor = 'var(--color-coconut)';
	}

	const items = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: 'gvbhdfgwysfuygsf',
		price: '65,000won',
	}));

	return (
		<>
			<SubThemeContainer backgroundColor={backgroundColor}>
				<SubThemeTitle>{dataTitle}</SubThemeTitle>
				<SubThemeList>
					{items.map((item) => (
						<ProductItem key={item.id} dataTitle={dataTitle} {...item} />
					))}
				</SubThemeList>
				<MoreBtn>MORE</MoreBtn>
			</SubThemeContainer>
		</>
	);
};

export default SubThemeBox;
