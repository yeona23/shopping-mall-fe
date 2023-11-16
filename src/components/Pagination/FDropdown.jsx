import React, { useState } from 'react';
import { FTDropdown } from './Pagination.style';
import FTCategory from './FTCategory';
import SortBox from './SortBox';
import FTPrice from './FTPrice';

const FDropdown = ({ isOpen }) => {
	return (
		<FTDropdown isOpen={isOpen}>
			<FTCategory />
			<FTPrice />
			<SortBox />
		</FTDropdown>
	);
};

export default FDropdown;
