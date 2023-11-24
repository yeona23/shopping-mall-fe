import { useDispatch } from 'react-redux';
import {
	getProducts,
	registerImage,
	registerProduct,
} from '../../../api/productApi';
import {
	ButtonWrap,
	CoconutButton,
	PalmoilButton,
} from './SellerButtons.style';
import { SET_SELL_PRODUCT } from '../../../slice/productSlice';
import { useEffect, useState } from 'react';

const SellerButtons = ({
	isRegisterPage,
	setIsRegisterPage,
	isRegisterImage,
	setIsRegisterImage,
	inputData,
	onResetInputFields,
}) => {
	const [registeredId, setRegisteredId] = useState(0);

	const lookupListHandler = () => {
		setIsRegisterPage(false);
	};

	const dispatch = useDispatch();

	const fetchRegisterProduct = async () => {
		try {
			if (Object.keys(inputData).length > 6) {
				const response = await registerProduct(inputData);

				if (response) {
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

	const fetchGetProducts = async () => {
		const response = await getProducts();

		console.log(response);

		setRegisteredId(response && response[response.length - 1]?.productId);
	};

	const fetchRegisterImage = async (files) => {
		const formData = new FormData();

		for (let i = 0; i < files.length; i++) {
			formData.append('files', files[i]);
		}

		try {
			const response = await registerImage(registeredId, formData);
		} catch (error) {
			console.error(error.message);
		}
	};

	const registerProductHandler = () => {
		try {
			if (isRegisterPage) {
				if (Object.keys(inputData).length > 6) {
					onResetInputFields();
					setIsRegisterImage(true);
				}
			} else {
				setIsRegisterPage(true);
			}

			fetchRegisterProduct();

			dispatch(SET_SELL_PRODUCT(inputData));
		} catch (error) {
			setIsRegisterPage(true);
			console.error(error.message);
		}
	};

	const registerImageHandler = () => {
		try {
			if (!isRegisterPage) {
				if (Object.keys(inputData).length <= 7) {
					setIsRegisterPage(true);
				}
			}

			fetchRegisterImage(inputData.productImg);

			setIsRegisterImage(false);
			setIsRegisterPage(false);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		fetchGetProducts();
	}, [registerProductHandler, registerImageHandler]);

	return (
		<ButtonWrap>
			<CoconutButton onClick={registerProductHandler}>
				텍스트 정보 등록
			</CoconutButton>
			{isRegisterImage && (
				<CoconutButton onClick={registerImageHandler}>
					이미지 정보 등록
				</CoconutButton>
			)}
			<PalmoilButton onClick={lookupListHandler}>리스트 조회</PalmoilButton>
		</ButtonWrap>
	);
};

export default SellerButtons;
