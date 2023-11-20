import React from 'react';
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
import { signoutUser } from '../../../api/AuthApi';
import localToken from '../../../api/LocalToken';

const DeleteModal = (props) => {
	const { onClose } = props;

	const signoutHandler = async (e) => {
		e.preventDefault();
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
					<ModalForm>
						<ModalInput type="text" placeholder="name"></ModalInput>
						<ModalInput type="email" placeholder="e-mail"></ModalInput>
						<ModalInput type="password" placeholder="password"></ModalInput>
						<DeleteButton onClick={signoutHandler}>
							Delete My Account
						</DeleteButton>
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
