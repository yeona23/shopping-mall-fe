import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 28px;
	padding-bottom: 24px;
	border-bottom: 2px solid var(--color-main-text);
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 20px 0;

	& :nth-child(1) {
		background-color: var(--color-coconut);
		color: var(--color-palmoil);
	}

	& :nth-child(2) {
		background-color: var(--color-palmoil);
		color: var(--color-coconut);
	}

	& button {
		border: none;
		outline: none;
		background-color: transparent;
		padding: 14px;
		font-size: 20px;
		width: 200px;
		cursor: pointer;
	}
`;
