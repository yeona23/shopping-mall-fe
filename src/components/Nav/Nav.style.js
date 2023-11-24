import { styled } from 'styled-components';

export const Header = styled.div`
	width: 100%;
	background: #ede1d250;
	backdrop-filter: blur(5px);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	top: 0;
	&:hover {
		background: var(--color-coconut);
	}
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
		cursor: pointer;
	}

	@media screen and (max-width: 1380px) {
		width: 100%;
		padding: 0 30px;
	}
	@media screen and (max-width: 750px) {
		display: none;
	}
`;

export const RsNav = styled.div`
	display: none;
	align-items: center;
	font-size: 16px;
	justify-content: space-between;
	box-sizing: border-box;
	width: 100%;
	padding: 0 30px;
	margin: 0 auto;
	height: 60px;
	& > div {
		position: absolute;
		right: 0%;
		top: 0%;
		width: 70vw;
		height: 600px;
		background: var(--color-coconut);
		padding: 10px 50px;
	}
	& > div > svg {
		position: absolute;
		right: 50px;
		top: 20px;
	}
	& img {
		height: 26px;
		cursor: pointer;
	}
	@media screen and (max-width: 750px) {
		display: flex;
	}
`;

export const NavUl = styled.ul`
	display: flex;
	align-items: center;
	gap: 35px;

	& > li:first-child:hover ul {
		height: 170px;
	}

	& > li:first-child ul {
		text-transform: uppercase;
	}

	@media screen and (max-width: 750px) {
		flex-direction: column;
		align-items: flex-start;
		width: fit-content;

		& > li:first-child:hover ul {
			height: fit-content;
			position: relative;
		}
	}
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
	@media screen and (max-width: 750px) {
		&:hover ul {
			position: relative;
			top: 0;
			height: fit-content;
			transition: none;
		}
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
	left: 50%;
	transform: translateX(-50%);

	&:hover {
		background: var(--color-coconut);
	}

	& li:first-child {
		margin-top: 20px;
	}
`;

export const DropLi = styled.li`
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: var(--color-natural);

	&:hover {
		color: var(--color-main-text);
		font-weight: 500;
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

	@media screen and (max-width: 750px) {
		border-bottom: 1px solid var(--color-main-text);
		padding: 10px 0;
		margin-bottom: 35px;
	}
`;
