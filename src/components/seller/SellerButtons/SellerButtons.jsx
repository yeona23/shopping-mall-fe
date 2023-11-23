import { useDispatch } from 'react-redux';
import { registerProduct } from '../../../api/productApi';
import { ButtonWrap } from './SellerButtons.style';
import { SET_SELL_PRODUCT } from '../../../slice/productSlice';

const SellerButtons = ({
	isRegisterPage,
	setIsRegisterPage,
	inputData,
	onResetInputFields,
}) => {
	const lookupListHandler = () => {
		setIsRegisterPage(false);
	};

	const dispatch = useDispatch();

	const fetchRegisterProduct = async () => {
		try {
			if (Object.keys(inputData).length > 7) {
				const response = await registerProduct(inputData);

				if (response) {
					setIsRegisterPage(false);
					onResetInputFields();
				}
			} else {
				if (isRegisterPage) {
					alert('모든 항목을 입력해주세요.');
				}
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const registerProductHandler = () => {
		try {
			if (!isRegisterPage) {
				if (Object.keys(inputData).length <= 7) {
					setIsRegisterPage(true);
				}
			} else {
				if (Object.keys(inputData).length > 7) {
					onResetInputFields();
				}
			}

			fetchRegisterProduct();

			dispatch(SET_SELL_PRODUCT(inputData));
		} catch (error) {
			setIsRegisterPage(true);
			console.error(error.message);
		}
	};

	return (
		<ButtonWrap>
			<button onClick={registerProductHandler}>판매 등록하기</button>
			<button onClick={lookupListHandler}>리스트 조회하기</button>
		</ButtonWrap>
	);
};

export default SellerButtons;
