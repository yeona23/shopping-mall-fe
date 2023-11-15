import { styled } from 'styled-components';

export const Header = styled.div`
	width: 100%;
	background: #ede1d250;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
`;

export const HeaderNav = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	justify-content: space-between;
	box-sizing: border-box;
	width: 1320px;
	margin: 0 auto;
	height: 60px;
	& > div:first-child {
		display: flex;
		gap: 80px;
	}
	& img {
		height: 26px;
	}
`;
export const NavUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 35px;
`;

export const NavLi = styled.li`
	cursor: pointer;
	position: relative;
	&:hover {
		color: var(--color-palmoil);
	}
	&:hover ul {
		height: 135px;
	}
`;

export const Dropdown = styled.ul`
	display: flex;
	flex-direction: column;
	height: 0px;
	gap: 20px;
	background: #ede1d250;
	padding: 0 20px;
	position: absolute;
	transition: all 0.6s;
	overflow: hidden;
	top: 38px;
	left: 0px;
	& li:first-child {
		margin-top: 20px;
	}
`;

export const DropLi = styled.li`
	display: flex;
	flex-direction: column;
	font-size: 14px;
	&:hover {
		color: var(--color-coconut);
	}
`;

export const UserContent = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	& span {
		cursor: pointer;
	}
	& span:hover {
		color: var(--color-palmoil);
	}
	& svg {
		cursor: pointer;
	}
`;
