import { useRef, useState } from 'react';
import SnsIcon from '../../snsIcon/SnsIcon';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import {
	AccountDiv,
	Paragraph,
	RegisterButton,
	RegisterDiv,
	RegisterForm,
	RegisterInput,
	RegisterTitleDiv,
	RegisterWrapper,
	SnsIconDiv,
} from './Register.style';
import { registerUser } from '../../../api/AuthApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [isSignUpClicked, setIsSignUpClicked] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false || isSignUpClicked);
	const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

	const [inputValue, setInputValue] = useState({
		name: null,
		email: '',
		password: '',
		pwdck: '',
		mobile: '',
	});

	const isPasswordValid = (password) => {
		if (password.length < 6) {
			return false;
		}

		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasDigit = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*()\-_=+[\]{};:'",<.>/?\\|]/.test(password);

		const conditionsMet =
			hasSpecialChar && (hasUpperCase || hasLowerCase || hasDigit);
		return conditionsMet;
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		setTextIsTouched(true);

		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (e.target.value.length === 0 || /^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}

		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}

			if (e.target.value.length > 0 && !isPasswordValid(e.target.value)) {
				setPasswordIsValid(false);
			} else setPasswordIsValid(true);
		}
	};

	const registerUserHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await registerUser(inputValue);
			if (!response) return;
			setConfirmModalIsOpen(true);
			// navigate('/login');
		} catch (error) {
			if (error.response.status === '406') {
				alert(error.message);
			}
			console.error(error.message);
		} finally {
			setIsSignUpClicked(true);
		}
	};

	const nameEmailInputIsInValid =
		!emailIsValid && textIsTouched && isSignUpClicked;
	const namePasswordInputIsInValid =
		!passwordIsValid && textIsTouched && isSignUpClicked;
	const nameConfirmedPasswordIsInvalid =
		textIsTouched &&
		inputValue.pwdck !== inputValue.password &&
		isSignUpClicked;

	return (
		<RegisterWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<RegisterDiv>
				<RegisterTitleDiv>SIGN UP</RegisterTitleDiv>
				<RegisterForm onSubmit={registerUserHandler}>
					<RegisterInput
						type="text"
						placeholder="NAME"
						name="name"
						onChange={inputValueHandler}></RegisterInput>
					<RegisterInput
						type="tel"
						placeholder="PHONE NUMBER"
						name="mobile"
						onChange={inputValueHandler}></RegisterInput>

					<RegisterInput
						placeholder="ID"
						type="text"
						name="email"
						onChange={inputValueHandler}></RegisterInput>
					{nameEmailInputIsInValid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<RegisterInput
						placeholder="PASSWORD"
						type="password"
						name="password"
						onChange={inputValueHandler}></RegisterInput>
					{namePasswordInputIsInValid && (
						<Paragraph>
							비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 6자리
							이상이여야 합니다.
						</Paragraph>
					)}
					<RegisterInput
						placeholder="VERIFY PASSWORD"
						type="password"
						name="pwdck"
						onChange={inputValueHandler}></RegisterInput>
					{nameConfirmedPasswordIsInvalid && (
						<Paragraph>비밀번호가 일치하지 않습니다.</Paragraph>
					)}
					<RegisterButton type="submit">SIGN UP</RegisterButton>
					{confirmModalIsOpen && (
						<ConfirmModal
							open={confirmModalIsOpen}
							onClose={() => {
								setConfirmModalIsOpen(false);
							}}
						/>
					)}
				</RegisterForm>
				<SnsIconDiv>
					<SnsIcon></SnsIcon>
				</SnsIconDiv>
			</RegisterDiv>
		</RegisterWrapper>
	);
};

export default Register;
