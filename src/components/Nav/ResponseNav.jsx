import React, { useState } from 'react';
import { NavLi, NavUl, RsNav, UserContent } from './Nav.style';
import NavDropdown from './NavDropdown';
import { useNavigate } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';

const ResponseNav = () => {
	const navigate = useNavigate();
	const [selectedLi, setSelectedLi] = useState(null);
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const clickNavHandler = (type) => {
		setSelectedLi(type);
		const url = `/products/?type=${type}`;
		navigate(url);
		setDropdownVisible(false);
	};

	const onHomeClick = () => {
		navigate('/');
		setDropdownVisible(false);
	};

	const onItemClick = (type, subType) => {
		setSelectedLi(type);
		const url = `/products/?type=${type}&subType=${subType}`;
		navigate(url);
		setDropdownVisible(false);
	};

	const onSignInClick = () => {
		navigate('/login');
		setDropdownVisible(false);
	};

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};

	return (
		<RsNav>
			<img src="/assets/main-logo.svg" alt="mainLogo" onClick={onHomeClick} />
			<RxHamburgerMenu size={25} onClick={toggleDropdown} />
			{isDropdownVisible && (
				<div>
					<RxCross1 size={20} onClick={toggleDropdown} />
					<UserContent>
						<span onClick={onSignInClick}>SIGN IN</span>
						<BsCart4 color="var(--color-main-text)" size={20} />
					</UserContent>
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
			)}
		</RsNav>
	);
};

export default ResponseNav;
