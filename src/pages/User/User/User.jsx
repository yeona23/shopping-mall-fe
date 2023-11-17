import styled from 'styled-components';
import { useRef, useState } from 'react';
import AddressChangeModal from '../AddressChangeModal/AddressChangeModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import TelChangeModal from '../TelChangeModal/TelChangeModal';
import PasswordChangeModal from '../PasswordModal/PasswordChangeModal';
import {
	AccountDiv,
	DeleteYourAccountDiv,
	GenderDiv,
	ModalDiv,
	ProductRegisterButton,
	ProfileImg,
	ProfileImgDiv,
	ProfileImgInput,
	ProfileImgLabel,
	SignOutDiv,
	UserBox,
	UserContent,
	UserItemContentDiv,
	UserItemDiv,
	UserItemTitleDiv,
	UserLeftItemDiv,
	UserNamePhotoDiv,
	UserPhotoDiv,
	UserRightItemDiv,
	UserWrapper,
} from './User.style';

const User = () => {
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();

	const saveImgFile = () => {
		const file = imgRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
	};

	const [deleteIsOpen, deleteSetIsOpen] = useState(false);
	const [addressIsOpen, addressSetIsOpen] = useState(false);
	const [telIsOpen, telSetIsOpen] = useState(false);
	const [passwordIsOpen, passwordSetIsOpen] = useState(false);

	const passwordOnClickButton = () => {
		passwordSetIsOpen(true);
	};

	const telOnClickButton = () => {
		telSetIsOpen(true);
	};

	const deleteOnClickButton = () => {
		deleteSetIsOpen(true);
	};

	const addressOnClickButton = () => {
		addressSetIsOpen(true);
	};

	const defaultUserImage = '/assets/icons/icon-user.png';
	return (
		<UserWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<UserBox>
				<UserContent>
					<UserItemDiv>
						<UserNamePhotoDiv>
							<UserPhotoDiv>
								<ProfileImgDiv>
									<ProfileImg
										src={
											imgFile
												? imgFile
												: `/images/icon/user.png` || defaultUserImage
										}
										alt=""
									/>
								</ProfileImgDiv>
								<ProfileImgLabel
									className="signup-profileImg-label"
									htmlFor="profileImg">
									Image select
								</ProfileImgLabel>
								<ProfileImgInput
									className="signup-profileImg-input"
									type="file"
									accept="image/*"
									id="profileImg"
									onChange={saveImgFile}
									ref={imgRef}
								/>
							</UserPhotoDiv>
						</UserNamePhotoDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>address</UserItemTitleDiv>
							<UserItemContentDiv>
								대한민국 서울특별시 청와대 주소 123-456
							</UserItemContentDiv>
							<ModalDiv onClick={addressOnClickButton}>change</ModalDiv>
							{addressIsOpen && (
								<AddressChangeModal
									open={addressIsOpen}
									onClose={() => {
										addressSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>e-mail</UserItemTitleDiv>
							<UserItemContentDiv>asdasd@asdasd.com</UserItemContentDiv>
							<ModalDiv>change</ModalDiv>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>phone number</UserItemTitleDiv>
							<UserItemContentDiv>010-000-00000</UserItemContentDiv>
							<ModalDiv onClick={telOnClickButton}>change</ModalDiv>
							{telIsOpen && (
								<TelChangeModal
									open={telIsOpen}
									onClose={() => {
										telSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>password</UserItemTitleDiv>
							<div></div>
							<ModalDiv onClick={passwordOnClickButton}>change</ModalDiv>
							{passwordIsOpen && (
								<PasswordChangeModal
									open={passwordIsOpen}
									onClose={() => {
										passwordSetIsOpen(false);
									}}
								/>
							)}
						</UserLeftItemDiv>
					</UserItemDiv>
					<UserItemDiv>
						<UserRightItemDiv>
							<div>name</div>
							<div>조영상</div>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>성별</div>
							<GenderDiv>
								<div>남</div>
								<div>여</div>
							</GenderDiv>
						</UserRightItemDiv>
						<UserRightItemDiv>
							<div>ONLY SELLER</div>
						</UserRightItemDiv>
						<ProductRegisterButton>PRODUCT REGISTRATION</ProductRegisterButton>
					</UserItemDiv>
				</UserContent>
				<UserContent>
					<div>
						<SignOutDiv>sign out</SignOutDiv>
						<DeleteYourAccountDiv onClick={deleteOnClickButton}>
							Delete Your account
						</DeleteYourAccountDiv>
						{deleteIsOpen && (
							<DeleteModal
								open={deleteIsOpen}
								onClose={() => {
									deleteSetIsOpen(false);
								}}
							/>
						)}
					</div>
				</UserContent>
			</UserBox>
		</UserWrapper>
	);
};

export default User;
