import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	AccountDiv,
	LoginButton,
	LoginDiv,
	LoginForm,
	LoginInput,
	LoginTitleDiv,
	LoginWrapper,
	Paragraph,
	SignUpButton,
	SignUpDiv,
} from './Login.style';
import { loginUser } from '../../api/authApi';
import localToken from '../../api/LocalToken';

const Login = () => {
	const navigate = useNavigate();
	const onRegisterClick = () => {
		navigate('/register');
	};
	const [isSignInClicked, setIsSignInClicked] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false || isSignInClicked);
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

	const loginUserHandler = async (e) => {
		e.preventDefault();

		if (emailIsValid && passwordIsValid) {
			try {
				const response = await loginUser(inputValue);

				if (!response) return;

				const { access_token } = response;

				const saveToken = (token) => {
					localToken.save(token);
				};

				if (access_token) {
					saveToken(access_token);
					navigate('/');
				}
			} catch (error) {
				if (error.response.code === 'ERR_NETWORK') {
					console.log('테스트');
				}
				if (error.response.status === '403') {
					console.error(error.message);
				}
				console.error(error.message);
			}
		}
		setIsSignInClicked(true);
	};

	const nameEmailInputIsInValid =
		!emailIsValid && textIsTouched && isSignInClicked;
	const namePasswordInputIsInValid =
		!passwordIsValid && textIsTouched && isSignInClicked;

	return (
		<LoginWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<LoginDiv>
				<LoginTitleDiv>SIGN IN</LoginTitleDiv>
				<LoginForm onSubmit={loginUserHandler}>
					<LoginInput
						placeholder="ID"
						type="text"
						name="email"
						onChange={inputValueHandler}></LoginInput>
					{nameEmailInputIsInValid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<LoginInput
						placeholder="PASSWORD"
						type="password"
						name="password"
						onChange={inputValueHandler}></LoginInput>
					{namePasswordInputIsInValid && (
						<Paragraph>비밀번호는 최소 6자리 이상이어야 합니다.</Paragraph>
					)}
					<LoginButton type="submit">SIGN IN</LoginButton>
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
