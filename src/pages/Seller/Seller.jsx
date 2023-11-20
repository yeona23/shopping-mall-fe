import { useState } from 'react';
import SellerButtons from '../../components/seller/SellerButtons/SellerButtons';
import SellerList from '../../components/seller/SellerList/SellerList';
import SellerMain from '../../components/seller/SellerMain/SellerMain';
import SellerNav from '../../components/seller/SellerNav/SellerNav';
import { SellerSection } from './Seller.style';

const Seller = () => {
	const [isRegisterPage, setIsRegisterPage] = useState(true);

	const [inputValue, setInputValue] = useState({});

	const handleProductSubmit = (data) => {
		setInputValue(data);
	};

	return (
		<SellerSection>
			<SellerNav setIsRegisterPage={setIsRegisterPage} />
			{isRegisterPage && <SellerMain onSubmit={handleProductSubmit} />}
			{!isRegisterPage && <SellerList />}
			<SellerButtons
				setIsRegisterPage={setIsRegisterPage}
				inputData={inputValue}
			/>
		</SellerSection>
	);
};

export default Seller;
