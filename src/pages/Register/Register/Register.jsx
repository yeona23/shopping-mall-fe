import { useRef, useState } from 'react';
import SnsIcon from '../../snsIcon/SnsIcon';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import {
	AccountDiv,
	ExParagraph,
	Paragraph,
	RegisterButton,
	RegisterDiv,
	RegisterForm,
	RegisterInput,
	RegisterTitleDiv,
	RegisterWrapper,
	SnsIconDiv,
} from './Register.style';
import { registerUser } from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [isSignUpClicked, setIsSignUpClicked] = useState(false);

	const [nameIsValid, setNameIsValid] = useState(false);
	const [nameOnFocus, setNameOnFocus] = useState(false);
	const [nameIsTouched, setNameIsTouched] = useState(false);

	const [mobileIsValid, setMobileISValid] = useState(false);
	const [mobileOnFocus, setMobileOnFocus] = useState(false);
	const [mobileIsTouched, setMobileIsTouched] = useState(false);

	const [emailIsValid, setEmailIsValid] = useState(false);
	const [emailOnFocus, setEmailOnFocus] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);

	const [enteredPassword, setEnteredPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [passwordOnFocus, setPasswordOnFocus] = useState(false);
	const [passwordIsToched, setPasswordIsTouched] = useState(false);

	const [pwdckIsValid, setPwdckIsValid] = useState(false);
	const [pwdckOnFocus, setPwdckOnFocus] = useState(false);
	const [pwdckIsTouched, setPwdckIsTouched] = useState(false);

	const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
	const [allIsValid, setAllIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);

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

	const regExpName = /^[가-힣]{2,4}$/;
	const regExpMobile = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

	const nameFocusHandler = () => {
		setNameOnFocus(true);
		setNameIsValid(true);
	};
	const nameOnBlurHandler = (e) => {
		setNameIsTouched(true);
		setNameOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'name') {
			if (regExpName.test(e.target.value)) {
				setNameIsValid(true);
			} else {
				setNameIsValid(false);
			}
		}
	};

	const emailOnFocusHandler = () => {
		setEmailOnFocus(true);
		setEmailIsValid(true);
	};
	const emailOnBlurHandler = (e) => {
		setEmailIsTouched(true);
		setEmailOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'email') {
			if (e.target.value.trim() === '') {
				setEmailIsValid(false);
			}
			if (/^.+@.+\..+$/.test(e.target.value)) {
				setEmailIsValid(true);
			} else {
				setEmailIsValid(false);
			}
		}
	};

	const mobileOnFocusHandler = () => {
		setMobileOnFocus(true);
		setMobileISValid(true);
	};
	const mobileOnBlurHandler = (e) => {
		setMobileIsTouched(true);
		setMobileOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'mobile') {
			if (regExpMobile.test(e.target.value)) {
				setMobileISValid(true);
			} else {
				setMobileISValid(false);
			}
		}
	};

	const passwordOnFocusHandler = () => {
		setPasswordOnFocus(true);
		setPasswordIsValid(true);
	};
	const passwordOnBlurHandler = (e) => {
		setPasswordIsTouched(true);
		setPasswordOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'password') {
			if (e.target.value.trim() === '') {
				setPasswordIsValid(false);
			}
			if (!isPasswordValid(e.target.value)) {
				setPasswordIsValid(false);
			} else {
				setPasswordIsValid(true);
				setEnteredPassword(e.target.value);
			}
		}
	};

	const pwdckOnFocusHandler = () => {
		setPwdckOnFocus(true);
	};

	const pwdckOnBlurHandler = (e) => {
		setPwdckIsTouched(true);
		setPwdckOnFocus(false);
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		if (name === 'pwdck') {
			if (e.target.value === enteredPassword) {
				setPwdckIsValid(true);
			}
		}
	};

	const inputValueHandler = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
		setTextIsTouched(true);

		if (
			nameIsValid &&
			mobileIsValid &&
			emailIsValid &&
			passwordIsValid &&
			pwdckIsValid
		) {
			setAllIsValid(true);
		}
	};

	const registerUserHandler = async (e) => {
		e.preventDefault();

		if (allIsValid) {
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
		}
	};

	const nameNameInputIsInValid = !nameIsValid && nameIsTouched;
	const nameMobileInputIsInvalid = !mobileIsValid && mobileIsTouched;
	const nameEmailInputIsInValid = !emailIsValid && emailIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && passwordIsToched;
	const nameConfirmedPasswordIsInvalid =
		pwdckIsTouched && inputValue.pwdck !== inputValue.password;

	return (
		<RegisterWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<RegisterDiv>
				<RegisterTitleDiv>SIGN UP</RegisterTitleDiv>
				<RegisterForm onSubmit={registerUserHandler}>
					<RegisterInput
						type="text"
						placeholder="이름"
						name="name"
						onFocus={nameFocusHandler}
						onBlur={nameOnBlurHandler}
						onChange={inputValueHandler}></RegisterInput>
					{nameOnFocus && <ExParagraph>ex&#41;홍길동</ExParagraph>}
					{nameNameInputIsInValid && (
						<Paragraph>이름을 올바르게 입력해주세요.</Paragraph>
					)}
					<RegisterInput
						type="text"
						placeholder="전화번호"
						name="mobile"
						onFocus={mobileOnFocusHandler}
						onChange={inputValueHandler}
						onBlur={mobileOnBlurHandler}></RegisterInput>
					{mobileOnFocus && <ExParagraph>ex&#41;000-0000-0000</ExParagraph>}
					{nameMobileInputIsInvalid && (
						<Paragraph>전화번호를 바르게 입력해주세요.</Paragraph>
					)}
					<RegisterInput
						placeholder="이메일"
						type="text"
						name="email"
						onChange={inputValueHandler}
						onFocus={emailOnFocusHandler}
						onBlur={emailOnBlurHandler}></RegisterInput>
					{nameEmailInputIsInValid && (
						<Paragraph>올바른 이메일 형식으로 입력해주세요.</Paragraph>
					)}
					{emailOnFocus && (
						<ExParagraph>이메일 형식으로 입력해주세요.</ExParagraph>
					)}

					<RegisterInput
						placeholder="비밀번호"
						type="password"
						name="password"
						onFocus={passwordOnFocusHandler}
						onBlur={passwordOnBlurHandler}
						onChange={inputValueHandler}></RegisterInput>
					{namePasswordInputIsInValid && (
						<Paragraph>
							영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 6자리 이상이여야
							합니다.
						</Paragraph>
					)}
					{passwordOnFocus && (
						<ExParagraph>
							영문, 숫자, 특수문자 중 2개 이상을 포함한 6자리 이상으로
							입력해주세요.
						</ExParagraph>
					)}

					<RegisterInput
						placeholder="비밀번호 확인"
						type="password"
						name="pwdck"
						onFocus={pwdckOnFocusHandler}
						onBlur={pwdckOnBlurHandler}
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
