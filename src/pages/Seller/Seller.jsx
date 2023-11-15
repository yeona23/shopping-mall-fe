import { useState } from 'react';
import SellerButtons from '../../components/seller/SellerButtons/SellerButtons';
import SellerList from '../../components/seller/SellerList/SellerList';
import SellerMain from '../../components/seller/SellerMain/SellerMain';
import SellerNav from '../../components/seller/SellerNav/SellerNav';
import { SellerSection } from './Seller.style';

const Seller = () => {
	const [isRegisterPage, setIsRegisterPage] = useState(true);

	return (
		<SellerSection>
			<SellerNav setIsRegisterPage={setIsRegisterPage} />
			{isRegisterPage && <SellerMain />}
			{!isRegisterPage && <SellerList />}
			<SellerButtons setIsRegisterPage={setIsRegisterPage} />
		</SellerSection>
	);
};

export default Seller;
