import styled from 'styled-components';

export const UserWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

export const UserBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1380px;
	height: 100vh;
	flex-direction: column;
`;

export const AccountDiv = styled.div`
	width: 90%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

export const UserContent = styled.div`
	padding-top: 30px;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const UserNamePhotoDiv = styled.div`
	display: flex;
	position: absolute;
	top: 160px;
`;

export const UserPhotoDiv = styled.div`
	width: 100px;
	height: 100px;
`;

export const UserNameDiv = styled.div`
	font-size: 30px;
	font-weight: 500;
	color: #434343;
	height: 63px;
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: left;
	padding-left: 20px;
`;

export const UserItemDiv = styled.div`
	flex-direction: column;
	padding-top: 200px;
`;

export const UserLeftItemDiv = styled.div`
	width: 782px;
	height: 48px;
	border-bottom: 1px solid #434343;
	font-size: 20px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	margin-top: 16px;
	padding-right: 8px;
`;

export const UserRightItemDiv = styled.div`
	width: 427px;
	height: 48px;
	border-bottom: 1px solid #434343;
	font-size: 20px;
	justify-content: space-between;
	display: flex;
	align-items: center;
	margin-top: 16px;
	padding-right: 8px;
`;

export const UserItemTitleDiv = styled.div`
	width: 200px;
	height: 48px;
	display: flex;
	align-items: center;
`;

export const UserItemContentDiv = styled.div`
	width: 500px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: left;
`;

export const ProductRegisterButton = styled.button`
	width: 427px;
	height: 64px;
	background-color: #5d2510;
	font-size: 20px;
	color: #ede1d2;
	border: 0;
	&:hover {
		cursor: pointer;
	}
`;

export const SignOutDiv = styled.div`
	width: 64px;
	padding-top: 100px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
export const DeleteYourAccountDiv = styled.div`
	padding-top: 20px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
export const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
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

export const ModalDiv = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
export const GenderDiv = styled.div`
	width: 60px;
	height: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
