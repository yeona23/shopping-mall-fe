import React from 'react';
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

const Nav = () => {
	return (
		<Header>
			<HeaderNav>
				<div>
					<img src="/assets/main-logo.svg" alt="mainLogo" />
					<NavUl>
						<NavLi>NEW</NavLi>
						<NavLi>
							OUTER
							<Dropdown>
								<DropLi>jacket</DropLi>
								<DropLi>coat</DropLi>
								<DropLi>cardigan</DropLi>
							</Dropdown>
						</NavLi>
						<NavLi>
							DRESS
							<Dropdown>
								<DropLi>jacket</DropLi>
								<DropLi>coat</DropLi>
								<DropLi>cardigan</DropLi>
							</Dropdown>
						</NavLi>
						<NavLi>
							TOP
							<Dropdown>
								<DropLi>knit</DropLi>
								<DropLi>shirts</DropLi>
								<DropLi>blouse</DropLi>
							</Dropdown>
						</NavLi>
						<NavLi>
							BOTTOM
							<Dropdown>
								<DropLi>pants</DropLi>
								<DropLi>skirt</DropLi>
							</Dropdown>
						</NavLi>
						<NavLi>
							ACC
							<Dropdown>
								<DropLi>shoes</DropLi>
								<DropLi>socks</DropLi>
								<DropLi>etc</DropLi>
							</Dropdown>
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
