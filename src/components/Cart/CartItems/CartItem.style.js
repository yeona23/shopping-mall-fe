import styled from 'styled-components';

export const ItemDiv = styled.div`
	padding: 22px 0;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	border-bottom: 1px solid #bdbdbd;
`;
export const ItemCheckDiv = styled.div`
	display: flex;
	align-items: center;
	.check {
		color: #fff;
		width: 14px;
		height: 14px;
	}
`;
export const ItemCheckInput = styled.input`
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
export const ItemImgDiv = styled.div`
	margin-right: 15px;
	width: 120px;
	height: 160px;
	border-radius: 5px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;
export const ItemHandleDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: end;
`;
