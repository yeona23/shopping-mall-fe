import { styled } from 'styled-components';

export const ItemWrapper = styled.div`
	width: 1320px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

export const Item = styled.div`
	width: calc((100% - 60px) / 4);
	margin-bottom: 70px;
	cursor: pointer;

	& span {
		border-top: 1px solid var(--color-main-text);
		margin-top: 10px;
		width: 100%;
		display: block;
		padding-top: 5px;
	}
	& p {
		margin: 10px 0;
	}
`;

export const ItemImg = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	overflow: hidden;

	& img {
		width: 100%;
	}
`;
