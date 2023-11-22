import styled from 'styled-components';

export const RegisterWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

export const RegisterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 80px;
`;

export const RegisterTitleDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 427px;
	height: 40px;
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 16px;
	color: #434343;
	line-height: 39.69px;
	cursor: default;
`;

export const RegisterInput = styled.input.attrs({
	placeholderTextColor: '#6A6A6A',
})`
	width: 427px;
	height: 40px;
	margin-top: 8px;
	margin-bottom: 8px;
	border: 1px solid #434343;
	padding-left: 16px;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: left;
`;

export const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-bottom: 40px;
`;

export const RegisterButton = styled.button`
	background-color: rgba(93, 37, 16, 0.9);
	color: #ede1d2;
	border: 1px solid #5d2510;
	padding: 8px, 52px, 8px, 52px;
	width: 427px;
	height: 42px;
	font-size: 20px;
	font-weight: 400;
	margin-top: 16px;
	&:hover {
		cursor: pointer;
	}
	&:active {
		background-color: rgba(93, 37, 16, 1);
	}
`;

export const AccountDiv = styled.div`
	width: 80%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

export const SnsIconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	width: 427px;
	height: 50px;
	border-top: 1px solid #434343;
`;

export const Paragraph = styled.p`
	width: 90%;
	text-align: left;
	font-size: 12px;
	color: tomato;
`;

export const ExParagraph = styled.p`
	width: 90%;
	text-align: left;
	font-size: 12px;
`;

export const ProfileImgLabel = styled.label`
	margin: 5px 0 20px 0;
	font-size: 16px;
	color: var(--color-main-text);
	display: inline-block;
	cursor: pointer;
`;

export const ProfileImgInput = styled.input`
	display: none;
`;

export const ProfileImgDiv = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	overflow: hidden;
	border: 2px solid var(--color-main-text);
`;

export const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
