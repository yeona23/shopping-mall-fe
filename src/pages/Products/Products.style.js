import { styled } from 'styled-components';

export const ProductContainer = styled.div`
	width: 100%;
	margin-top: 100px;
	& > div {
		width: 1320px;
		margin: 0 auto;

		@media screen and (max-width: 1380px) {
			width: 100%;
			padding: 0 30px;
		}
	}
`;

export const Title = styled.div`
	width: 100%;
	border-bottom: 2px solid var(--color-main-text);
	display: flex;
	align-items: flex-end;
	padding-bottom: 15px;
	& p {
		font-size: 20px;
		color: #43434370;
	}
	& h2 {
		font-size: 26px;
	}
`;
