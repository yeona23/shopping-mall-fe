import React, { useState } from 'react';
import { ItemBox } from '../Pagination/ProductsBox/ProductsBox.style';
import {
	MoreBtn,
	SubThemeContainer,
	SubThemeList,
	SubThemeTitle,
} from './Main.style';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
	const [clickTypeBtn, setClickTypeBtn] = useState();

	let backgroundColor = '';
	if (dataTitle === 'outer' || dataTitle === 'bottom') {
		backgroundColor = 'var(--color-coconut)';
	}

	const items = Array.from({ length: 8 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: 'gvbhdfgwysfuygsf',
		price: '65,000won',
	}));

	const clickTypeBtnHandler = () => {
		setClickTypeBtn(dataTitle);
		const url = `/products/?type=${dataTitle}`;
		navigate(url);
	};

	return (
		<>
			<SubThemeContainer backgroundColor={backgroundColor}>
				<SubThemeTitle>{dataTitle.toUpperCase()}</SubThemeTitle>
				<SubThemeList>
					{items.map((item) => (
						<ProductItem key={item.id} dataTitle={dataTitle} {...item} />
					))}
				</SubThemeList>
				<MoreBtn onClick={() => clickTypeBtnHandler(dataTitle)}>MORE</MoreBtn>
			</SubThemeContainer>
		</>
	);
};

export default SubThemeBox;
