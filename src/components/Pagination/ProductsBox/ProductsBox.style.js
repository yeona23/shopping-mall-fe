import { styled } from 'styled-components';

export const ProductList = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	margin: 0 auto;
`;

export const ItemBox = styled.div`
	width: calc((100% - 60px) / 4);
	margin-bottom: 60px;
	cursor: pointer;

	& div {
		width: 100%;
		aspect-ratio: 1 / 1;
		overflow: hidden;
	}

	& div:hover img {
		scale: 1.1;
	}

	& div img {
		width: 100%;
		transition: all 0.5s;
	}

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
