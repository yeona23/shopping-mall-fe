import styled, { keyframes } from 'styled-components';

const showCardInputs = keyframes`
	0%{
		opacity: 0;
		transform: translateY(-20%);
	}50%{
		transform: translateY(0);
	}100%{
		opacity: 1;
	}
`;

export const OrderInputDiv = styled.div`
	margin-bottom: 12px;
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto auto;
	gap: 8px;
	animation: ${showCardInputs} 0.7s ease;
`;
export const OrderInput = styled.input`
	width: 100%;
	height: 40px;
	border: 1px solid #999;
	border-radius: 3px;
	padding: 0 14px;
	&::placeholder {
		font-family: 'Red Hat Display', sans-serif;
	}
`;
