import React, { useState } from 'react';
import {
	CloseButton,
	Contents,
	DeleteButton,
	ModalForm,
	ModalInput,
	ModalWrap,
	Overlay,
	TitleDiv,
} from './DeleteModal.style';
import { signoutUser } from '../../../api/authApi';
import localToken from '../../../api/LocalToken';

const DeleteModal = (props) => {
	const { onClose } = props;

	const [enteredMobile, setEnteredMobile] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');

	const mobileInputChangeHandler = (event) => {
		setEnteredMobile(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const passwordInputChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const [inputValue, setInputValue] = useState({
		mobile: '',
		email: '',
		password: '',
	});

	const signoutHandler = async (e) => {
		e.preventDefault();

		//이 부분에 유효성 검사 로직 추가해서 유효성이 검증된 경우에만 아래 코드 실행하도록 변경하기

		setInputValue({
			mobile: enteredMobile,
			email: enteredEmail,
			password: enteredPassword,
		});

		try {
			const response = await signoutUser(inputValue);

			if (!response) return;

			localToken.remove();

			// navigate('/');
		} catch (error) {
			if (error.response.status === '403') {
				console.error(error.message);
			}
			console.error(error.message);
		}
	};

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Delete Account</h1>
					</TitleDiv>
					<ModalForm onSubmit={signoutHandler}>
						<ModalInput
							type="text"
							placeholder="mobile"
							onChange={mobileInputChangeHandler}></ModalInput>
						<ModalInput
							type="email"
							placeholder="e-mail"
							onChange={emailInputChangeHandler}></ModalInput>
						<ModalInput
							type="password"
							placeholder="password"
							onChange={passwordInputChangeHandler}></ModalInput>
						<DeleteButton type="submit">Delete My Account</DeleteButton>
						<CloseButton
							onClick={() => {
								onClose(false);
							}}>
							Close
						</CloseButton>
					</ModalForm>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
};

export default DeleteModal;
