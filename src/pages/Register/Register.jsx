import { useRef, useState } from 'react';
import SnsIcon from '../snsIcon/SnsIcon';
import {
	AccountDiv,
	Paragraph,
	ProfileImg,
	ProfileImgAltDiv,
	ProfileImgDiv,
	ProfileImgInput,
	ProfileImgLabel,
	RegisterButton,
	RegisterDiv,
	RegisterForm,
	RegisterInput,
	RegisterTitleDiv,
	RegisterWrapper,
	SnsIconDiv,
} from './Register.style';

const Register = () => {
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [textIsTouched, setTextIsTouched] = useState(false);
	const [confirmedPassword, setConfirmedPassword] = useState('');
	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();

	const [inputValue, setInputValue] = useState({
		name: null,
		email: '',
		password: '',
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
			[hasUpperCase, hasLowerCase, hasDigit, hasSpecialChar].filter(Boolean)
				.length >= 2;

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
		if (name === 'confirmedPassword') {
			setConfirmedPassword(value);
		}
	};

	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	const defaultUserImage = '/assets/icons/icon-user.png';

	const nameEmailInputIsInValid = !emailIsValid && textIsTouched;
	const namePasswordInputIsInValid = !passwordIsValid && textIsTouched;
	const nameConfirmedPasswordIsInvalid =
		textIsTouched && confirmedPassword !== inputValue.password;

	return (
		<RegisterWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<RegisterDiv>
				<RegisterTitleDiv>SIGN UP</RegisterTitleDiv>
				<RegisterForm>
					<RegisterInput
						type="text"
						placeholder="NAME"
						name="name"
						onChange={inputValueHandler}></RegisterInput>
					<RegisterInput
						type="tel"
						placeholder="PHONE NUMBER"
						name="phoneNumber"
						onChange={inputValueHandler}></RegisterInput>

					<RegisterInput
						placeholder="ID"
						type="email"
						name="email"
						onChange={inputValueHandler}
						isValid={nameEmailInputIsInValid}></RegisterInput>
					{nameEmailInputIsInValid && (
						<Paragraph>정확하지 않은 이메일입니다.</Paragraph>
					)}
					<RegisterInput
						placeholder="PASSWORD"
						type="password"
						name="password"
						onChange={inputValueHandler}
						isValid={namePasswordInputIsInValid}></RegisterInput>
					{namePasswordInputIsInValid && (
						<Paragraph>
							비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소 6자리
							이상이여야 합니다.
						</Paragraph>
					)}
					<RegisterInput
						placeholder="VERIFY PASSWORD"
						type="password"
						name="confirmedPassword"
						onChange={inputValueHandler}
						isValid={nameConfirmedPasswordIsInvalid}></RegisterInput>
					{nameConfirmedPasswordIsInvalid && (
						<Paragraph>비밀번호가 일치하지 않습니다.</Paragraph>
					)}
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
