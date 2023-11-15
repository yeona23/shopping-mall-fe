import styled from 'styled-components';

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 90%;
	margin: 20px 0;
	margin-right: 130px;

	& :nth-child(1) {
		background-color: var(--color-coconut);
		color: var(--color-palmoil);
		margin-right: 30px;
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
