import React from 'react';
import {
	ProductContainer,
	Title,
} from '../../../pages/Products/Products.style';
import PaginationBar from '../../Pagination/PaginationBar';
import ProductsBox from '../../Pagination/ProductsBox/ProductsBox';

const Outer = ({ type, subType }) => {
	let titleContent;

	if (type) {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp;</p>
				<h2>OUTER</h2>
			</>
		);
	} else if (subType) {
		titleContent = (
			<>
				<p>HOME &nbsp;&gt;&nbsp; </p>
				<p>OUTER &nbsp;&gt;&nbsp; </p>
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

export default Outer;
