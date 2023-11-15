import styled from 'styled-components';
import SnsIcon from '../snsIcon/SnsIcon';

const RegisterWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const RegisterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const RegisterTitleDiv = styled.div`
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
`;

const RegisterInput = styled.input.attrs({
	placeholderTextColor: '#6A6A6A',
})`
	width: 427px;
	height: 40px;
	margin-bottom: 16px;
	border: 1px solid #434343;
	padding-left: 16px;
	font-size: 16px;
`;

const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-bottom: 40px;
`;

const RegisterButton = styled.button`
	background-color: #5d2510;
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
`;

const AccountDiv = styled.div`
	width: 80%;
	height: 40px;
	border-bottom: 2px solid #434343;
	font-weight: 500;
	font-size: 30px;
	padding-bottom: 50px;
	position: absolute;
	top: 80px;
`;

const SnsIconDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	width: 427px;
	height: 50px;
	border-top: 1px solid #434343;
`;

const Register = () => {
	return (
		<RegisterWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<RegisterDiv>
				<RegisterTitleDiv>SIGN UP</RegisterTitleDiv>
				<RegisterForm>
					<RegisterInput placeholder="NAME"></RegisterInput>
					<RegisterInput placeholder="ID" type="email"></RegisterInput>
					<RegisterInput placeholder="PASSWORD" type="password"></RegisterInput>
					<RegisterInput
						placeholder="VERIFY PASSWORD"
						type="password"></RegisterInput>
					<RegisterButton>SIGN UP</RegisterButton>
				</RegisterForm>
				<SnsIconDiv>
					<SnsIcon></SnsIcon>
				</SnsIconDiv>
			</RegisterDiv>
		</RegisterWrapper>
	);
};

export default Register;
