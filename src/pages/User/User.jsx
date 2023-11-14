import styled from 'styled-components';

const UserWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const AccountDiv = styled.div`
	width: 80%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 60px;
`;

const UserContent = styled.div`
	width: 80%;
	flex-direction: column;
`;

const UserNamePhotoDiv = styled.div`
	display: flex;
`;

const UserLeftItemDiv = styled.div`
	width: 728px;
	height: 397px;
	justify-content: space-between;
`;

const User = () => {
	return (
		<UserWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<UserContent>
				<UserNamePhotoDiv>
					<div></div>
					<div>조영상</div>
				</UserNamePhotoDiv>
			</UserContent>
		</UserWrapper>
	);
};

export default User;
