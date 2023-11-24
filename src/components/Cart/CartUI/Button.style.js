import styled from 'styled-components';

export const CartBtn = styled.button`
	width: ${(props) => (props.size ? props.size : '120px')};
	height: 35px;
	border: none;
	border-radius: 5px;
	background-color: var(--color-palmoil);
	color: var(--color-coconut);
	font-size: 16px;
	font-family: 'Red Hat Display', sans-serif;
	cursor: pointer;
`;
