import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
	justify-content: space-between;
	padding-top: 20px;
	width: 427px;
	height: 50px;
	border-top: 1px solid #434343;
`;

const SignUpButton = styled.button`
	width: 147px;
	height: 37px;
	font-size: 16px;
	color: #5d2510;
	border: 1px solid #5d2510;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
`;

const Paragraph = styled.p`
	width: 90%;
	text-align: left;
	color: var(--color-dark-red);
	font-size: 12px;
`;

const Login = () => {
	const navigate = useNavigate();
	const onRegisterClick = () => {
		navigate('/register');
	};
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);
	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });

		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length > 0 && /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && e.target.value.length < 6) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	const nameEmailInputIsInValid = !emailIsValid && textIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && textIsTouched;

	return (
		<LoginWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<LoginDiv>
				<LoginTitleDiv>SIGN IN</LoginTitleDiv>
				<LoginForm>
					<LoginInput
						placeholder="ID"
						type="email"
						name="email"
						onChange={inputValueHandler}></LoginInput>
					{nameEmailInputIsInValid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<LoginInput
						placeholder="PASSWORD"
						type="password"
						name="password"
						onChange={inputValueHandler}
						isValid={namePasswordInputIsInValid}></LoginInput>
					{namePasswordInputIsInValid && (
						<Paragraph>비밀번호는 최소 6자리 이상이어야 합니다.</Paragraph>
					)}
					<LoginButton>SIGN IN</LoginButton>
				</LoginForm>
				<SignUpDiv>
					<div>Dont you have on account?</div>
					<div>
						<SignUpButton onClick={onRegisterClick}>Sign up</SignUpButton>
					</div>
				</SignUpDiv>
			</LoginDiv>
		</LoginWrapper>
	);
};

export default Login;
