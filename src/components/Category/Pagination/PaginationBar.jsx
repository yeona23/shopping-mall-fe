import React from 'react';
import { BsArrowDownUp, BsPlus } from 'react-icons/bs';
import { PaginationBox } from './Pagination.style';

const PaginationBar = () => {
	return (
		<PaginationBox>
			<div>
				<span>FILTER</span>
				<BsPlus size={22} color="var(--color-main-text)" />
			</div>
			<div>
				<span>SORT</span>
				<BsArrowDownUp size={12} color="var(--color-main-text)" />
			</div>
		</PaginationBox>
	);
};

export default PaginationBar;
