import styled from 'styled-components';

export const SellerMainContainer = styled.div`
	padding: 60px;
	margin-left: 200px;

	& div {
		display: flex;
		align-items: center;
		margin-bottom: 30px;

		& label {
			display: inline-block;
			width: 200px;
			background-color: var(--color-coconut);
			font-size: 16px;
			margin-right: 30px;
			padding: 10px 20px;
		}

		& input,
		select {
			width: 500px;
			height: 35px;
			border: 1px solid gray;
			border-radius: 3px;
			margin-right: 10px;
			padding: 5px;
		}
	}
`;
