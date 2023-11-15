import { styled, css } from 'styled-components';

export const PaginationBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0;
	margin-bottom: 50px;
	& > div {
		display: flex;
		align-items: center;
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
