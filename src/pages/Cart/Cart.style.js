import styled from 'styled-components';

export const CartDiv = styled.div`
	max-width: 1320px;
	margin: 80px auto 200px auto;
`;
export const CartTitleDiv = styled.div`
	padding: 24px 0;
	border-bottom: 2px solid #434343;
`;
export const CartTitleH2 = styled.h3`
	font-size: 24px;
	font-weight: 500;
`;
export const CartContentsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	height: auto;
`;
export const CartItemsDiv = styled.div`
	width: 65%;
`;
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
export const CartCheckedDeleteDiv = styled.div`
	text-align: right;
	margin-top: 30px;
`;
