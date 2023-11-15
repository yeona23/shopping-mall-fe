import { styled } from 'styled-components';

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
