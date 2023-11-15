import { ButtonWrap, Title } from './SellerNav.style';

const SellerNav = ({ setIsRegisterPage }) => {
	const itemListHandler = () => {
		setIsRegisterPage(false);
	};

	const registerPageHandler = () => {
		setIsRegisterPage(true);
	};

	return (
		<div>
			<Title>Seller</Title>
			<ButtonWrap>
				<button onClick={registerPageHandler}>판매 물품 등록</button>
				<button onClick={itemListHandler}>판매 물품 리스트</button>
			</ButtonWrap>
		</div>
	);
};

export default SellerNav;
