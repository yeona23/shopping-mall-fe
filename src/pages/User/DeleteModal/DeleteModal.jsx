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

const DeleteModal = (props) => {
	const { onClose } = props;

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
						<DeleteButton>Delete My Account</DeleteButton>
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
