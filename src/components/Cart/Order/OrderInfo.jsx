import React from 'react';
import OrderFieldset from './OrderFieldset/OrderFieldset';

const OrderInfo = () => {
	return (
		<form action="">
			<OrderFieldset>Contact Information</OrderFieldset>
			<OrderFieldset>Shipping Information</OrderFieldset>
			<OrderFieldset>Payment Method</OrderFieldset>
		</form>
	);
};

export default OrderInfo;
