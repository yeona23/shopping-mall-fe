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
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	animation: ${showCardInputs} 0.7s ease;
	.divided-input {
		width: calc(50% - 4px);
	}
`;
export const OrderInput = styled.input`
	width: 100%;
	margin-bottom: 8px;
	height: 40px;
	border: 1px solid #999;
	border-radius: 3px;
	padding: 0 14px;
	&::placeholder {
		font-family: 'Red Hat Display', sans-serif;
	}
`;
export const ValidDiv = styled.div`
	width: calc(50% - 4px);
`;
export const InvalidP = styled.p`
	color: red;
	font-size: 12px;
	margin-left: 5px;
`;
