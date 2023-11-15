import styled from 'styled-components';

export const AddedItemWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-coconut);
	border-radius: 5px;
	height: 60px;
	margin-bottom: 10px;

	& div:nth-child(1) {
		padding-left: 10px;
	}
`;

export const CountAndPriceWrap = styled.div`
	display: flex;
	align-items: center;

	& div:nth-child(1) {
		margin-right: 40px;
		& span {
			margin: 0 10px;
		}
	}

	& div:nth-child(2) {
		margin-right: 10px;

		& span {
			font-weight: bold;
			margin-right: 4px;
		}
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

export const CountButton = styled.button`
	width: 24px;
	height: 24px;
	border: 0.5px solid #dfdfdf;
	border-radius: 50%;
	cursor: pointer;
`;
