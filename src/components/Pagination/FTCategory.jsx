import React from 'react';
import { FilterCategory } from './Pagination.style';

const FTCategory = () => {
	return (
		<>
			<FilterCategory>
				<h3>category</h3>
				<div>
					<input type="radio" name="category" id="coat" />
					<label htmlFor="coat">coat</label>
					<input type="radio" name="category" id="jacket" />
					<label htmlFor="jacket">jacket</label>
					<input type="radio" name="category" id="cardigan" />
					<label htmlFor="cardigan">cardigan</label>
				</div>
			</FilterCategory>
		</>
	);
};

export default FTCategory;
