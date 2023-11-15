import styled from 'styled-components';

const UserWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const UserBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1380px;
	height: 100vh;
	flex-direction: column;
`;

const AccountDiv = styled.div`
	width: 90%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

const UserContent = styled.div`
	padding-top: 30px;
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const UserNamePhotoDiv = styled.div`
	display: flex;
	position: absolute;
	top: 160px;
`;

const UserPhotoDiv = styled.div`
	width: 63px;
	height: 63px;
	border-radius: 31.5px;
	background-color: gray;
`;

const UserNameDiv = styled.div`
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

const UserItemDiv = styled.div`
	flex-direction: column;
	padding-top: 200px;
`;

const UserLeftItemDiv = styled.div`
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

const UserRightItemDiv = styled.div`
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

const UserItemTitleDiv = styled.div`
	width: 200px;
	height: 48px;
	display: flex;
	align-items: center;
`;

const UserItemContentDiv = styled.div`
	width: 500px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: left;
`;

const ProductRegisterButton = styled.button`
	width: 427px;
	height: 42px;
	background-color: #5d2510;
	font-size: 20px;
	color: #ede1d2;
	border: 0;
	&:hover {
		cursor: pointer;
	}
`;

const SignOutDiv = styled.div`
	width: 64px;
	padding-top: 100px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
const DeleteYourAccountDiv = styled.div`
	padding-top: 20px;
	border-bottom: 1px solid #434343;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;

const User = () => {
	return (
		<UserWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<UserBox>
				<UserContent>
					<UserItemDiv>
						<UserNamePhotoDiv>
							<UserPhotoDiv></UserPhotoDiv>
							<UserNameDiv>John Smith</UserNameDiv>
						</UserNamePhotoDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>address</UserItemTitleDiv>
							<UserItemContentDiv>
								대한민국 서울특별시 청와대 주소 123-456
							</UserItemContentDiv>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>e-mail</UserItemTitleDiv>
							<UserItemContentDiv>asdasd@asdasd.com</UserItemContentDiv>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>phone number</UserItemTitleDiv>
							<UserItemContentDiv>010-000-00000</UserItemContentDiv>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>change password</UserItemTitleDiv>
						</UserLeftItemDiv>
					</UserItemDiv>
					<UserItemDiv>
						<UserRightItemDiv>
							<div>POINT</div>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>+</div>
							<div>10,000 coin</div>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>ONLY SELLER</div>
						</UserRightItemDiv>
						<ProductRegisterButton>PRODUCT REGISTRATION</ProductRegisterButton>
					</UserItemDiv>
				</UserContent>
				<UserContent>
					<div>
						<SignOutDiv>sign out</SignOutDiv>
						<DeleteYourAccountDiv>Delete Your account</DeleteYourAccountDiv>
					</div>
				</UserContent>
			</UserBox>
		</UserWrapper>
	);
};

export default User;
