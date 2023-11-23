import styled from 'styled-components';

export const DescriptionSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding: 60px;

	& p {
		text-align: center;
		margin-bottom: 60px;
		width: 75%;
		font-size: 30px;
		font-weight: bold;
	}

	& ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const ImgWrap = styled.div`
	margin-bottom: 60px;
`;
