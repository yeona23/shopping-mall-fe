import React from 'react';
import { DropLi, Dropdown } from './Nav.style';

const NavDropdown = ({ type, subTypes = [], onItemClick }) => {
	const onClickDropUl = () => null;

	return (
		<Dropdown
			onClick={(e) => {
				e.stopPropagation();
				onClickDropUl();
			}}>
			{subTypes.map((subType) => (
				<DropLi
					key={subType}
					onClick={(e) => {
						e.stopPropagation();
						onItemClick(type, subType);
					}}>
					{subType}
				</DropLi>
			))}
		</Dropdown>
	);
};

export default NavDropdown;
