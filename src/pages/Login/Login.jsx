import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	AccountDiv,
	LoginButton,
	LoginDiv,
	LoginForm,
	LoginInput,
	LoginInputEmail,
	LoginInputPassword,
	LoginTitleDiv,
	LoginWrapper,
	Paragraph,
	SignUpButton,
	SignUpDiv,
} from './Login.style';
import { loginUser } from '../../api/AuthApi';
import localToken from '../../api/LocalToken';

const Login = () => {
	const inputRef = useRef();
	const navigate = useNavigate();

	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
	const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
	const [enteredPasswordIsTouched, SetEnteredPasswordIsTouched] =
		useState(false);
	const passwordInputIsInvalid =
		!enteredPasswordIsValid && enteredPasswordIsTouched;

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailIsTouched(true);
	};

	const passwordInputBlurHandler = () => {
		SetEnteredPasswordIsTouched(true);
	};

	const onRegisterClick = () => {
		navigate('/register');
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const loginUserHandler = async (e) => {
		e.preventDefault();

		setEnteredEmailIsTouched(true);
		SetEnteredPasswordIsTouched(true);

		// email 유효성검사
		if (enteredEmail.trim() === '') {
			setEnteredEmailIsValid(false);
		}
		if (enteredEmail.length > 0 && /^.+@.+\..+$/.test(enteredEmail.value)) {
			setEnteredEmailIsValid(true);
		} else {
			setEnteredEmailIsValid(false);
		}

		// password 유효성 검사
		if (enteredPassword.trim() === '') {
			setEnteredPasswordIsValid(false);
		}

		if (enteredPassword.length > 0 && enteredPassword.length < 6) {
			setEnteredPasswordIsValid(false);
		} else setEnteredPasswordIsValid(true);

		if (enteredEmailIsValid && enteredPasswordIsValid) {
			setInputValue({
				email: enteredEmail,
				password: enteredPassword,
			});
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
				if (error.response.status === '403') {
					console.error(error.message);
				}
				console.error(error.message);
			}
		}
	};

	return (
		<LoginWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<LoginDiv>
				<LoginTitleDiv>SIGN IN</LoginTitleDiv>
				<LoginForm onSubmit={loginUserHandler}>
					<LoginInputEmail
						invalid={emailInputIsInvalid}
						placeholder="ID"
						type="text"
						name="email"
						onBlur={emailInputBlurHandler}
						onChange={emailInputChangeHandler}
						ref={inputRef}></LoginInputEmail>
					{emailInputIsInvalid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<LoginInputPassword
						invalid={passwordInputIsInvalid}
						placeholder="PASSWORD"
						type="password"
						name="password"
						onBlur={passwordInputBlurHandler}
						onChange={passwordInputChangeHandler}></LoginInputPassword>
					{passwordInputIsInvalid && (
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
