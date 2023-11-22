import React from 'react';
import { DropLi, Dropdown } from './Nav.style';
import { useNavigate } from 'react-router-dom';

const NavDropdown = ({ type, subTypes = [], onItemClick }) => {
	const navigate = useNavigate();

	return (
		<Dropdown>
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
