import styled from 'styled-components';

export const CartSummaryDiv = styled.div`
	width: 30%;
	height: auto;
	position: relative;
`;

export const CartSummaryTitleH3 = styled.h3`
	padding: 22px 0;
	font-size: 20px;
	font-weight: 500;
	border-bottom: 1px solid #bdbdbd;
	width: 100%;
`;
export const CartSummaryOptionDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 24px;
	margin-top: 16px;
	color: #999;
	&:last-of-type {
		border-top: 1px solid #bdbdbd;
		line-height: 60px;
		color: #434343;
		font-weight: 500;
	}
`;
