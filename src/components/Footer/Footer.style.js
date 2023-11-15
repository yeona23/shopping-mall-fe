import { styled } from 'styled-components';

export const FtBox = styled.div`
	bottom: 0;
	width: 100%;
	background: var(--color-palmoil);
	font-weight: 300;
	& > div {
		width: 1320px;
		margin: 0 auto;
	}
`;

export const FtContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 50px 0;
	border-bottom: 1px solid var(--color-coconut);
`;

export const FooterText = styled.div`
	display: flex;
	gap: 60px;
	color: var(--color-coconut);
`;

export const FooterUl = styled.ul`
	& li:first-child {
		font-size: 20px;
	}
	& li:nth-child(2n) {
		font-size: 14px;
		margin: 15px 0 10px 0;
	}
`;
export const FooterLi = styled.li`
	font-size: 12px;
	color: var(--color-coconut);
`;

export const SocialLi = styled.li`
	font-size: 14px;
	color: var(--color-coconut);
`;

export const FtCopyright = styled.div`
	color: var(--color-coconut);
	font-size: 12px;
	text-align: center;
	padding: 20px;
`;
