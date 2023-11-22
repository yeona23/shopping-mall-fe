import React, { useState } from 'react';
import {
	DropLi,
	Dropdown,
	Header,
	HeaderNav,
	NavLi,
	NavUl,
	UserContent,
} from './Nav.style';
import { BsCart4 } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const Nav = () => {
	const navigate = useNavigate();
	const [selectedLi, setSelectedLi] = useState(null);

	const onHomeClick = () => {
		navigate('/');
	};

	const clickNavHandler = (type) => {
		setSelectedLi(type);
		const url = `/products/?type=${type}`;
		navigate(url);
	};

	const onItemClick = (type, subType) => {
		setSelectedLi(type);
		const url = `/products/?type=${type}&subType=${subType}`;
		navigate(url);
	};

	return (
		<Header>
			<HeaderNav>
				<div>
					<img
						src="/assets/main-logo.svg"
						alt="mainLogo"
						onClick={onHomeClick}
					/>
					<NavUl>
						<NavLi onClick={() => clickNavHandler('new')}>
							NEW
							<NavDropdown
								type="new"
								subTypes={['outer', 'top', 'bottom', 'acc']}
								onItemClick={onItemClick}
							/>
						</NavLi>
						<NavLi onClick={() => clickNavHandler('outer')}>
							OUTER
							<NavDropdown
								type="outer"
								subTypes={['jacket', 'coat', 'cardigan']}
								onItemClick={onItemClick}
							/>
						</NavLi>
						<NavLi onClick={() => clickNavHandler('top')}>
							TOP
							<NavDropdown
								type="top"
								subTypes={['knit', 'shirts', 'blouse']}
								onItemClick={onItemClick}
							/>
						</NavLi>
						<NavLi onClick={() => clickNavHandler('bottom')}>
							BOTTOM
							<NavDropdown
								type="bottom"
								subTypes={['pants', 'skirt']}
								onItemClick={onItemClick}
							/>
						</NavLi>
						<NavLi onClick={() => clickNavHandler('acc')}>
							ACC
							<NavDropdown
								type="acc"
								subTypes={['shoes', 'socks', 'etc']}
								onItemClick={onItemClick}
							/>
						</NavLi>
					</NavUl>
				</div>
				<UserContent>
					<span>SIGN IN</span>
					<BsCart4 color="var(--color-main-text)" size={20} />
				</UserContent>
			</HeaderNav>
		</Header>
	);
};

export default Nav;
