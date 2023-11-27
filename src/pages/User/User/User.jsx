import { useEffect, useRef, useState } from 'react';
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
import { logoutUser, uploadUser } from '../../../api/authApi';
import localToken from '../../../api/LocalToken';
import { myPageGet, myPagePut } from '../../../api/myPageApi';
import MyInfoModal from '../MyInfoModal/MyInfoModal';

const User = () => {
	const [imgFile, setImgFile] = useState('');
	const imgRef = useRef();
	const navigate = useNavigate();

	const [userInfo, setUserInfo] = useState({
		name: '',
		email: '',
		mobile: '',
		address: '',
		gender: '',
		myInfo: '',
		profile: '',
		profileImg: '',
	});

	const getMyInfo = async () => {
		try {
			const response = await myPageGet();
			if (response) {
				// API 응답에서 필요한 정보를 추출하여 state 업데이트
				setUserInfo({
					name: response.name || '',
					email: response.email || '',
					mobile: response.mobile || '',
					address: response.address || '',
					gender: response.gender || '',
					myInfo: response.myInfo || '',
					profile: response.profile || '',
					profileImg: response.profileImg || '',
				});
				console.log('회원정보 불러오기:', response);
			}
		} catch (error) {
			console.error(
				'회원 정보를 불러오는 도중 오류가 발생했습니다.:',
				error.message,
			);
		}
	};

	useEffect(() => {
		getMyInfo(); // 컴포넌트가 마운트되면 사용자 정보 가져오기
	}, []); // 빈 배열을 넣어 한 번만 실행되도록 설정

	const putMyInfo = async (event) => {
		try {
			const response = await myPagePut(userInfo);
			console.log('회원정보 변경하기', response);
		} catch (error) {
			console.log('회원정보를 변경하는 도중 오류가 발생했습니다.');
		}
	};

	const saveImgFile = async () => {
		try {
			const selectedFile = imgRef.current.files[0];
			if (!selectedFile) {
				console.log('파일이 선택되지 않았습니다.');
				return; // 파일이 선택되지 않은 경우 함수 종료
			}

			if (!(selectedFile instanceof Blob)) {
				console.error('선택된 파일이 유효한 파일 또는 Blob 객체가 아닙니다.');
				return; // 유효하지 않은 파일인 경우 함수 종료
			}
			const formData = new FormData();
			formData.append('file', selectedFile);
			const response = await uploadUser(formData);
			console.log('이미지 업로드 후 반환되는 URl값:', response);

			setUserInfo((prevUserInfo) => ({
				...prevUserInfo,
				profileImg: response,
			}));

			console.log('유저 스테이트에 이미지 url 업로드 되는지 체크:', userInfo);
			const putResponse = await putMyInfo(userInfo);
			if (!response) return;

			const reader = new FileReader();
			reader.readAsDataURL(selectedFile);
			reader.onloadend = () => {
				setImgFile(reader.result);
			};
		} catch (error) {
			console.error('이미지 업로드 중 오류 발생:', error.message);
		}
	};

	const [deleteIsOpen, deleteSetIsOpen] = useState(false);
	const [addressIsOpen, addressSetIsOpen] = useState(false);
	const [telIsOpen, telSetIsOpen] = useState(false);
	const [passwordIsOpen, passwordSetIsOpen] = useState(false);
	const [myinfoIsOpen, myinfoSetIsOpen] = useState(false);

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

	const myinfoOnClickButton = () => {
		myinfoSetIsOpen(true);
	};

	const logoutHandler = async () => {
		try {
			const response = await logoutUser();
			if (!response) return;
			localToken.remove();
			navigate('/');
		} catch (error) {
			console.error('Logout failed:', error.message);
		}
	};

	const updateMyInfo = async (newMyInfo) => {
		try {
			setUserInfo((prevUserInfo) => {
				const updatedUserInfo = {
					...prevUserInfo,
					myInfo: newMyInfo,
				};
				console.log('업데이트된 사용자 정보:', updatedUserInfo);
				return updatedUserInfo;
			});
			console.log('소개 변경후 상태 변경 체킹:', userInfo);
			const response = await putMyInfo(userInfo);
		} catch (error) {
			console.error(error.message);
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
								src={userInfo.profileImg || '/assets/icons/icon-user.png'}
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
							<UserItemContentDiv>{userInfo.email}</UserItemContentDiv>
							<ModalDivHidden>change</ModalDivHidden>
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>my info</UserItemTitleDiv>
							<UserItemContentDiv>
								{userInfo.myInfo
									? userInfo.myInfo
									: '소개를 아직 입력하지 않았습니다.'}
							</UserItemContentDiv>
							<ModalDiv onClick={myinfoOnClickButton}>change</ModalDiv>
							{myinfoIsOpen && (
								<MyInfoModal
									open={myinfoIsOpen}
									onClose={() => {
										myinfoSetIsOpen(false);
									}}
									updateMyInfo={updateMyInfo}
								/>
							)}
						</UserLeftItemDiv>
						<UserLeftItemDiv>
							<UserItemTitleDiv>address</UserItemTitleDiv>
							<UserItemContentDiv>
								{userInfo.address
									? userInfo.address
									: '주소를 아직 입력하지 않았습니다.'}
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
							<UserItemContentDiv>{userInfo.mobile}</UserItemContentDiv>
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
							<div>{userInfo.name}</div>
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
