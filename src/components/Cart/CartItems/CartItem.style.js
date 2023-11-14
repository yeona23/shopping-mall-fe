import styled from 'styled-components';

export const ItemDiv = styled.div`
	padding: 22px 0;
	display: grid;
  grid-template-columns: 1fr 3fr 1fr;
	border-bottom: 1px solid #BDBDBD;
`;
export const ItemImgDiv = styled.div`
	margin: auto;
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
