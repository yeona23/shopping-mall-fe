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
	ModalDivHidden,
	OnlySellerDiv,
	ProductRegisterButton,
	ProfileDiv,
	ProfileImg,
	ProfileImgDiv,
	ProfileImgInput,
	ProfileImgLabel,
	ProfileLabelDiv,
	SignOutDiv,
	UserBox,
	UserContent,
	UserItemContentDiv,
	UserItemDiv,
	UserItemDivRight,
	UserItemTitleDiv,
	UserLeftItemDiv,
	UserNamePhotoDiv,
	UserPhotoDiv,
	UserRightItemDiv,
	UserWrapper,
} from './User.style';
import { useNavigate } from 'react-router';
import { logoutUser } from '../../../api/authApi';
import localToken from '../../../api/LocalToken';

const User = () => {
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();
	const navigate = useNavigate();

	const saveImgFile = () => {
		const selectedFile = imgRef.current.files[0];
		if (!selectedFile) {
			console.log('파일이 선택되지 않았습니다.');
			return; // 파일이 선택되지 않은 경우 함수 종료
		}

		if (!(selectedFile instanceof Blob)) {
			console.error('선택된 파일이 유효한 파일 또는 Blob 객체가 아닙니다.');
			return; // 유효하지 않은 파일인 경우 함수 종료
		}

		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			setImgFile(reader.result);
		};
		console.log(imgFile);
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

	const logoutHandler = async () => {
		try {
			await logoutUser();
			localToken.remove();
			navigate('/');
		} catch (error) {
			console.error('Logout failed:', error.message);
		}
	};

	return (
		<UserWrapper>
			<AccountDiv>ACCOUNT</AccountDiv>
			<UserBox>
				<UserContent>
					<UserItemDiv>
						<ProfileImgDiv>
							<ProfileImg
								src={imgFile ? imgFile : `/assets/icons/icon-user.png`}
								alt=""
								onClick={() => {
									imgRef.current.click();
								}}
							/>
							<ProfileImgInput
								className="signup-profileImg-input"
								type="file"
								accept="image/jpg,image/png,image/jpeg"
								id="profileImg"
								onChange={saveImgFile}
								ref={imgRef}
							/>
						</ProfileImgDiv>

						<UserLeftItemDiv>
							<UserItemTitleDiv>e-mail</UserItemTitleDiv>
							<UserItemContentDiv>asdasd@asdasd.com</UserItemContentDiv>
							<ModalDivHidden>change</ModalDivHidden>
						</UserLeftItemDiv>
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
					<UserItemDivRight>
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
						<OnlySellerDiv>
							<div>ONLY SELLER</div>
						</OnlySellerDiv>
						<ProductRegisterButton>PRODUCT REGISTRATION</ProductRegisterButton>
					</UserItemDivRight>
				</UserContent>
				<UserContent>
					<div>
						<SignOutDiv onClick={logoutHandler}>sign out</SignOutDiv>
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
