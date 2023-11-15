import React from 'react';
import { OrderInput, OrderInputDiv } from './OrderInputs.style';
import { useSelector } from 'react-redux';

const OrderInputs = ({ title }) => {
	const user = useSelector((state) => state.user);

	let contact;
	if (title === 'Contact Information') contact = true;
	const { name, email, phoneNumber, address } = user;

	const inputValueHandler = (e) => {};
	return (
		<OrderInputDiv>
			{contact && user ? (
				<OrderInput type="text" placeholder="Name" value={name} />
			) : (
				<OrderInput type="text" placeholder="Address" value={address} />
			)}

			{contact && user ? (
				<OrderInput
					className="divided-input"
					type="email"
					placeholder="Email"
					value={email}
				/>
			) : (
				<OrderInput placeholder="배송 요청사항" />
			)}

			{contact && user ? (
				<OrderInput
					className="divided-input"
					type="number"
					placeholder="Phone Number"
					value={phoneNumber}
				/>
			) : null}
		</OrderInputDiv>
	);
};

export default OrderInputs;
