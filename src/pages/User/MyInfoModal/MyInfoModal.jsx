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
} from './MyInfoModal.style';

const MyInfoModal = (props) => {
	const { onClose, updateMyInfo } = props;
	const [myInfo, setMyInfo] = useState('');

	const inputValueHandler = (event) => {
		setMyInfo(event.target.value);
	};

	const infoChange = (event) => {
		event.preventDefault();
		updateMyInfo(myInfo);
		onClose(false);
	};

	return (
		<Overlay>
			<ModalWrap>
				<Contents>
					<TitleDiv>
						<h1>My info</h1>
					</TitleDiv>
					<ModalForm onSubmit={infoChange}>
						<ModalInput
							type="text"
							placeholder="소개를 입력해주세요."
							onChange={inputValueHandler}></ModalInput>
						<DeleteButton type="submit">Change</DeleteButton>
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

export default MyInfoModal;
