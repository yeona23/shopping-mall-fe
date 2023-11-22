import React from 'react';
import {
	ProductContainer,
	Title,
} from '../../../pages/Products/Products.style';
import PaginationBar from '../../Pagination/PaginationBar';
import ProductsBox from '../../Pagination/ProductsBox/ProductsBox';

const New = ({ data, type, subType }) => {
	let titleContent;

	if (type === 'new') {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp;</p>
				<h2>NEW</h2>
			</>
		);
	} else {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp; </p>
				<p>NEW &nbsp;&gt;&nbsp; </p>
				{subType && <h2>{subType.toUpperCase()}</h2>}
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

export default New;
