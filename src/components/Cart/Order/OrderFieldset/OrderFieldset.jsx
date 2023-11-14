import React, { useState } from 'react';
import { CartSummaryTitleH3 } from '../../CartSummary/CartSummary.style';
import OrderInputs from './OrderInputs/OrderInputs';
import OrderPaymentInput from './OrderInputs/OrderPaymentInput/OrderPaymentInput';

const OrderFieldset = ({ children }) => {
	let contactInput, paymentInput;
	if (children === 'Contact Information') contactInput = true;
	if (children === 'Payment Method') paymentInput = true;
	return (
		<fieldset>
			<CartSummaryTitleH3 as="legend" style={{ border: 'none' }}>
				{children}
			</CartSummaryTitleH3>
			{!paymentInput ? <OrderInputs title={children} /> : <OrderPaymentInput />}
		</fieldset>
	);
};

export default OrderFieldset;
