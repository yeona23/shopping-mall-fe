import { ButtonWrap } from './SellerButtons.style';

const SellerButtons = ({ setIsRegisterPage }) => {
	const lookupListHandler = () => {
		setIsRegisterPage(false);
	};

	return (
		<ButtonWrap>
			<button>판매 등록하기</button>
			<button onClick={lookupListHandler}>리스트 조회하기</button>
		</ButtonWrap>
	);
};

export default SellerButtons;
