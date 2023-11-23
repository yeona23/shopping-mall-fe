import styled from 'styled-components';

export const ItemDescDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
`;
export const ItemNameP = styled.p`
	font-size: 18px;
	margin-bottom: 16px;
`;
export const ItemOptionsP = styled.p`
	line-height: 26px;
`;
export const ItemQuantityDiv = styled.div`
	width: 110px;
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
	font-size: 18px;
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
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
`;
