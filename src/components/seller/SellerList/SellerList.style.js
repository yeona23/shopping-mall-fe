import styled from 'styled-components';

export const SellerListContainer = styled.div`
	padding: 60px;

	& ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
`;

export const SellerListItem = styled.li`
	display: flex;
	justify-content: space-around;
	margin: 0 30px 30px 0;
`;

export const ImgWrap = styled.div`
	& img {
		width: 160px;
	}
`;

export const ItemTitle = styled.h3`
	font-size: 18px;
	border-bottom: 0.5px solid var(--color-main-text);
`;

export const ItemInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 10px;

	& div {
		margin-top: 10px;
	}
`;

export const PriceAndButtonsWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 0;
	margin-left: 30px;
`;

export const ButtonsWrap = styled.div`
	display: flex;
`;

export const DiscountWrap = styled.div`
	display: flex;
	align-items: center;

	& div {
		border: 0.5px solid var(--color-main-text);
		margin: 0 10px 0 20px;
	}

	& input {
		border: none;
		outline: none;
		text-align: center;
		width: 100px;
	}

	& button {
		outline: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
		font-size: 16px;
	}
`;

export const StockWrap = styled.div`
	display: flex;
	align-items: center;

	& div {
		border: 0.5px solid var(--color-main-text);
		margin-left: 40px;
		margin: 0 10px 0 40px;
	}

	& input {
		border: none;
		outline: none;
		width: 90px;
		text-align: center;
	}

	& button {
		outline: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
		font-size: 16px;
	}
`;

export const Button = styled.button`
	outline: none;
	border: none;
	background-color: var(--color-palmoil);
	color: var(--color-coconut);
	cursor: pointer;
	margin-right: 10px;
`;
