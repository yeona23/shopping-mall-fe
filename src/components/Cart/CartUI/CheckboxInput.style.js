import styled from 'styled-components';

export const CartItemCheckInput = styled.input`
	display: none;
	& + label {
		display: inline-block;
		content: '';
		width: 18px;
		height: 18px;
		margin-right: 8px;
		border-radius: 50%;
		border: 1px solid #434343;
		cursor: pointer;
	}
	&:checked + label {
		background-color: #434343;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
