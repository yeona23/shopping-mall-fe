import React from 'react';
import { OrderInput, OrderInputDiv } from './OrderInputs.style';

const OrderInputs = ({ title }) => {
	return (
		<OrderInputDiv>
			<OrderInput
				type="text"
				placeholder={title === 'Contact Information' ? 'Firstname' : 'Country'}
			/>
			<OrderInput
				type="text"
				placeholder={title === 'Contact Information' ? 'Lastname' : 'City'}
			/>
			<OrderInput
				type="text"
				placeholder={
					title === 'Contact Information' ? 'Email Address' : 'Address'
				}
			/>
			<OrderInput
				type="text"
				placeholder={
					title === 'Contact Information' ? 'Phone Number' : 'Postal Code'
				}
			/>
		</OrderInputDiv>
	);
};

export default OrderInputs;
