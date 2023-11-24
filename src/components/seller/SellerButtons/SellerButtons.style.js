import styled from 'styled-components';

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 90%;
	margin: 20px 0;
	margin-right: 130px;

	& button {
		border: none;
		outline: none;
		padding: 14px;
		font-size: 20px;
		width: 200px;
		cursor: pointer;
	}
`;

export const CoconutButton = styled.button`
	background-color: var(--color-coconut);
	color: var(--color-palmoil);
	margin-right: 30px;
`;

export const PalmoilButton = styled.button`
	background-color: var(--color-palmoil);
	color: var(--color-coconut);
`;
