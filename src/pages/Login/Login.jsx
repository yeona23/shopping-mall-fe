import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	AccountDiv,
	ButtonParagraph,
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
	const [accountIsValid, setAccountIsValid] = useState(0);
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
		setAccountIsValid(0);
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

	const inputFocusHandler = () => {
		setEmailIsValid(true);
		setPasswordIsValid(true);
	};

	const loginUserHandler = async (e) => {
		e.preventDefault();
		setIsSignInClicked(true);

		if (emailIsValid && passwordIsValid) {
			try {
				const response = await loginUser(inputValue);

				if (!response) {
					setAccountIsValid(2);
					return;
				}

				const { access_token } = response;

				const saveToken = (token) => {
					localToken.save(token);
				};

				if (access_token) {
					saveToken(access_token);
					navigate('/');
				}
			} catch (error) {
				if (error.response.status === '403') {
					console.error(error.message);
				}
				console.error(error.message);
			}
		}
	};

	const nameEmailInputIsInValid =
		!emailIsValid && textIsTouched && isSignInClicked;
	const namePasswordInputIsInValid =
		!passwordIsValid && textIsTouched && isSignInClicked;
	const serverIsInValid = accountIsValid === 2 && isSignInClicked;
	const accountIsInValid = accountIsValid === 3 && isSignInClicked;
	const inputIsEmpty = !textIsTouched && isSignInClicked;

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
						onFocus={inputFocusHandler}
						onChange={inputValueHandler}></LoginInput>
					{nameEmailInputIsInValid && (
						<Paragraph>올바른 이메일 형식이 아닙니다.</Paragraph>
					)}
					<LoginInput
						placeholder="PASSWORD"
						type="password"
						name="password"
						onFocus={inputFocusHandler}
						onChange={inputValueHandler}></LoginInput>
					{namePasswordInputIsInValid && (
						<Paragraph>비밀번호는 최소 6자리 이상이어야 합니다.</Paragraph>
					)}

					<LoginButton type="submit">SIGN IN</LoginButton>
					{/* {accountIsInValid && (
						<ButtonParagraph>
							이메일 또는 비밀번호가 올바르지 않습니다.
						</ButtonParagraph>
					)}
					{serverIsInValid && (
						<ButtonParagraph>
							현재 서버상의 문제로 로그인이 불가합니다.
						</ButtonParagraph>
					)} */}
					{inputIsEmpty && (
						<ButtonParagraph>이메일과 비밀번호를 입력해주세요.</ButtonParagraph>
					)}
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
