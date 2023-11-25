import React, { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';
import { PaginationBox } from './Pagination.style';
import FDropdown from './FDropdown';

const PaginationBar = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};
	return (
		<PaginationBox>
			<div onClick={toggleDropdown}>
				<span>FILTER</span>
				{isDropdownVisible ? (
					<BsDash size={22} color="var(--color-main-text)" />
				) : (
					<BsPlus size={22} color="var(--color-main-text)" />
				)}
				<FDropdown isOpened={isDropdownVisible} />
			</div>
		</PaginationBox>
	);
};

export default PaginationBar;
