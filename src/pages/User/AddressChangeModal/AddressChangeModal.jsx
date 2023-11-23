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
} from './AddressChangeModal.style';

const AddressChangeModal = (props) => {
	const { onClose } = props;

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>Address Change</h1>
					</TitleDiv>
					<ModalForm>
						<ModalInput
							type="text"
							placeholder="변경할 주소를 입력해주세요."></ModalInput>
						<ModalInput
							type="text"
							placeholder="상세 주소를 입력해주세요."></ModalInput>
						<DeleteButton>Address Change</DeleteButton>
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

export default AddressChangeModal;
