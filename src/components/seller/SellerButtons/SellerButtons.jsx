import { useDispatch, useSelector } from 'react-redux';
import { registerProduct } from '../../../api/productApi';
import { ButtonWrap } from './SellerButtons.style';
import { SET_SELL_PRODUCT } from '../../../slice/productSlice';

const SellerButtons = ({ setIsRegisterPage, inputData }) => {
	const lookupListHandler = () => {
		setIsRegisterPage(false);
	};

	const dispatch = useDispatch();

	console.log(inputData);

	const fetchRegisterProduct = async () => {
		const response = await registerProduct(inputData);

		console.log(response);
	};

	const registerProductHandler = () => {
		fetchRegisterProduct();
		dispatch(SET_SELL_PRODUCT(inputData));
	};

	const productsData = useSelector((state) => state.product);

	console.log(productsData);

	return (
		<ButtonWrap>
			<button onClick={registerProductHandler}>판매 등록하기</button>
			<button onClick={lookupListHandler}>리스트 조회하기</button>
		</ButtonWrap>
	);
};

export default SellerButtons;
