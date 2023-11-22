import React from 'react';
import {
	ProductContainer,
	Title,
} from '../../../pages/Products/Products.style';
import PaginationBar from '../../Pagination/PaginationBar';
import ProductsBox from '../../Pagination/ProductsBox/ProductsBox';

const Bottom = ({ data, type, subType }) => {
	let titleContent;

	if (type === 'bottom') {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp;</p>
				<h2>BOTTOM</h2>
			</>
		);
	} else if (subType) {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp; </p>
				<p>BOTTOM &nbsp;&gt;&nbsp; </p>
				<h2>{subType.toUpperCase()}</h2>
			</>
		);
	}

	return (
		<ProductContainer>
			<div>
				<Title>{titleContent}</Title>
				<PaginationBar />
				<ProductsBox />
			</div>
		</ProductContainer>
	);
};

export default Bottom;
