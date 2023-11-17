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
} from './PasswordChangeModal.style';

const PasswordChangeModal = (props) => {
	const { onClose } = props;

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Password Change</h1>
					</TitleDiv>
					<ModalForm>
						<ModalInput
							type="password"
							placeholder="변경할 비밀번호를 입력하세요."></ModalInput>
						<ModalInput
							type="password"
							placeholder="비밀번호 확인"></ModalInput>
						<DeleteButton>Password Change</DeleteButton>
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

export default PasswordChangeModal;
