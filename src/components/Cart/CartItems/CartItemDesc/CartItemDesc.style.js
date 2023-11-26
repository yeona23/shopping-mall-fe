import styled from 'styled-components';

export const ItemDescDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const ItemNameP = styled.p`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 16px;
`;
export const ItemOptionsP = styled.p`
	line-height: 26px;
`;
export const ItemQuantityDiv = styled.div`
	width: 80px;
	border: 1px solid #434343;
	display: flex;
	border-radius: 5px;
	overflow: hidden;
	height: 35px;
`;
export const ItemQuantityInput = styled.input`
	width: 40%;
	text-align: center;
	border: none;
	font-size: 16px;
	-webkit-appearance: textfield;
	-moz-appearance: textfield;
	appearance: textfield;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
`;
export const ItemQuantityBtn = styled.button`
	height: 100%;
	width: 30%;
	background: #fff;
	border: none;
	cursor: pointer;
	.plus-minus {
		width: 16px;
		height: 16px;
		vertical-align: middle;
	}
`;
