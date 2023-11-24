import { styled } from 'styled-components';

export const SubThemeContainer = styled.div`
	width: 100%;
	height: 1200px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	background-color: ${(props) => props.backgroundColor || 'inherit'};

	@media screen and (max-width: 1380px) {
		height: auto;
		aspect-ratio: 1 / 1.5;
		margin-top: 30px;
	}
	@media screen and (max-width: 960px) {
		height: auto;
		aspect-ratio: 1 /3;
		margin-top: 0px;
	}

	@media screen and (max-width: 720px) {
		margin-bottom: 100px;
	}
`;

export const SubThemeList = styled.div`
	width: 1320px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	margin: 0 auto;
	@media screen and (max-width: 1380px) {
		width: 100%;
		padding: 0 30px;
	}
`;

export const SubThemeTitle = styled.h2`
	font-size: 40px;
	text-align: center;
	margin-bottom: 70px;
`;

export const MoreBtn = styled.div`
	width: 150px;
	padding: 10px 0;
	border: 1px solid var(--color-main-text);
	margin: 0 auto;
	text-align: center;
	cursor: pointer;

	&:hover {
		background: var(--color-palmoil);
		color: var(--color-coconut);
	}
`;
