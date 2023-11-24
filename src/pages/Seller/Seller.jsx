import { useState } from 'react';
import SellerButtons from '../../components/seller/SellerButtons/SellerButtons';
import SellerList from '../../components/seller/SellerList/SellerList';
import SellerMain from '../../components/seller/SellerMain/SellerMain';
import SellerNav from '../../components/seller/SellerNav/SellerNav';
import { SellerSection } from './Seller.style';

const Seller = () => {
	const [isRegisterPage, setIsRegisterPage] = useState(true);
	const [isRegisterImage, setIsRegisterImage] = useState(false);
	const [inputValue, setInputValue] = useState({});
	const [resetInputFields, setResetInputFields] = useState(() => () => {});

	const handleProductSubmit = (data) => {
		setInputValue(data);
	};

	const handleResetInputFields = (resetFunction) => {
		setResetInputFields(() => resetFunction);
	};

	return (
		<SellerSection>
			<SellerNav setIsRegisterPage={setIsRegisterPage} />
			{isRegisterPage && (
				<SellerMain
					onSubmit={handleProductSubmit}
					onReset={handleResetInputFields}
					isRegisterImage={isRegisterImage}
				/>
			)}
			{!isRegisterPage && <SellerList />}
			<SellerButtons
				isRegisterPage={isRegisterPage}
				setIsRegisterPage={setIsRegisterPage}
				isRegisterImage={isRegisterImage}
				setIsRegisterImage={setIsRegisterImage}
				inputData={inputValue}
				onResetInputFields={resetInputFields}
			/>
		</SellerSection>
	);
};

export default Seller;
