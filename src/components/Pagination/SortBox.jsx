import React from 'react';
import { SortBtn, SortContainer } from './Pagination.style';

const SortBox = () => {
	return (
		<>
			<SortContainer>
				<h3>sort</h3>
				<div>
					<SortBtn type="radio" name="sort" id="newest" />
					<label htmlFor="newest">newest</label>
				</div>
				<div>
					<SortBtn type="radio" name="sort" id="priceLow" />
					<label htmlFor="priceLow">price: Low to High</label>
				</div>
				<div>
					<SortBtn type="radio" name="sort" id="priceHIgh" />
					<label htmlFor="priceHIgh">price: High to Low</label>
				</div>
			</SortContainer>
		</>
	);
};

export default SortBox;
