import { styled, css } from 'styled-components';

export const PaginationBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 15px 0;
	margin-bottom: 50px;
	& > div {
		display: flex;
		align-items: center;
		position: relative;
		cursor: pointer;
	}
	& span {
		margin-right: 5px;
	}
`;

export const PageBtn = styled.div`
	width: 100%;
	margin: 50px auto 100px auto;
	display: flex;
	justify-content: center;
	gap: 20px;

	& div {
		width: 30px;
		height: 30px;
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--color-palmoil);
	}
`;

export const FTDropdown = styled.div`
	width: 380px;
	height: ${(props) => (props.isOpen ? '480px' : 0)};
	transition: height 0.3s ease;
	overflow: hidden;
	position: absolute;
	top: 120%;
	right: 0px;
	background: #ffffff;
	padding-left: 20px;
	z-index: 100;
	border: ${(props) =>
		props.isOpen ? '1px solid var(--color-main-text)' : 'none'};

	& h3 {
		font-size: 18px;
		margin: 40px 0 20px 0;
		text-transform: uppercase;
	}

	& [type='radio']:checked {
		background: var(--color-palmoil);
	}
`;

export const FilterCategory = styled.div`
	& > div {
		display: flex;
		align-items: center;
	}
	& label {
		margin-right: 20px;
	}
`;

export const FilterPriceSlide = styled.div`
	position: relative;
	height: 2px;
	width: 340px;
	border-radius: 10px;
	background-color: var(--color-main-text);
`;

export const FilterPriceRangeWrap = styled.div`
	position: relative;
`;

export const FilterPriceRangeMin = styled.input`
	position: absolute;
	top: -10px;
	width: 340px;
	margin: 0;
	-webkit-appearance: none;
	background: none;
	pointer-events: none;

	&::-webkit-slider-thumb {
		height: 15px;
		width: 15px;
		border-radius: 2px;
		background-color: var(--color-palmoil);
		-webkit-appearance: none;
		pointer-events: auto;
	}
`;

export const FilterPriceRangeMax = styled(FilterPriceRangeMin)``;

export const PriceLabelBox = styled.div`
	display: flex;
	width: 340px;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	& div {
		width: 40%;
		border: 1px solid var(--color-main-text);
		padding: 5px 10px;
	}
`;

export const SortContainer = styled.div`
	display: flex;
	flex-direction: column;

	& div {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
`;

export const SortBtn = styled.input`
	& [type='radio']:checked {
		accent-color: var(--color-palmoil);
		background: var(--color-palmoil);
		border: 1px solid var(--color-palmoil);
	}
`;
