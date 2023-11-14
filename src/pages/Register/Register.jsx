import styled from 'styled-components';
import SnsIcon from '../snsIcon/SnsIcon';

const LoginWrapper = styled.body`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const LoginDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const LoginTitleDiv = styled.div`
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

const LoginInput = styled.input.attrs({
	placeholderTextColor: '#6A6A6A',
})`
	width: 427px;
	height: 40px;
	margin-bottom: 16px;
	border: 1px solid #434343;
	padding-left: 16px;
	font-size: 16px;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-bottom: 40px;
`;

const LoginButton = styled.button`
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
	top: 60px;
`;

const SignUpDiv = styled.div`
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
		<LoginWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<LoginDiv>
				<LoginTitleDiv>SIGN UP</LoginTitleDiv>
				<LoginForm>
					<LoginInput placeholder="NAME"></LoginInput>
					<LoginInput placeholder="ID" type="email"></LoginInput>
					<LoginInput placeholder="PASSWORD" type="password"></LoginInput>
					<LoginInput
						placeholder="VERIFY PASSWORD"
						type="password"></LoginInput>
					<LoginButton>SIGN UP</LoginButton>
				</LoginForm>
				<SignUpDiv>
					<SnsIcon></SnsIcon>
				</SignUpDiv>
			</LoginDiv>
		</LoginWrapper>
	);
};

export default Register;
