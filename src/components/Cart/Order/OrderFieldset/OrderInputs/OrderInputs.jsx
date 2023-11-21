import React, { useEffect, useState } from 'react';
import {
	InvalidP,
	OrderInput,
	OrderInputDiv,
	ValidDiv,
} from './OrderInputs.style';
import { useSelector } from 'react-redux';

const OrderInputs = ({ title }) => {
	const user = useSelector((state) => state.user);
	const [formdata, setFormdata] = useState({
		email: '',
		phone: '',
		emailValid: true,
		phoneValid: true,
	});

	let contact;
	if (title === 'Contact Information') contact = true;
	// const { name, email, phoneNumber, address } = user;

	const formValidateHandler = (e) => {
		const { type, value } = e.target;
		setFormdata({
			...formdata,
			[type]: value,
			[`${type}Error`]: null,
		});

		if (type === 'email') {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			setFormdata({
				...formdata,
				emailValid:
					value.trim() === '' || emailRegex.test(value) ? true : false,
			});
		} else if (type === 'number') {
			const phoneRegex = /^\d{11}$/;
			setFormdata({
				...formdata,
				phoneValid:
					value.trim() === '' || phoneRegex.test(value) ? true : false,
			});
		}
	};

	return (
		<OrderInputDiv>
			{contact && user ? (
				<OrderInput type="text" placeholder="이름" />
			) : (
				<OrderInput type="text" placeholder="주소" />
			)}

			{contact && user ? (
				<div className="divided-input">
					<OrderInput
						type="email"
						placeholder="이메일"
						onChange={formValidateHandler}
					/>
					{!formdata.emailValid ? (
						<InvalidP>유효하지 않은 이메일입니다.</InvalidP>
					) : null}
				</div>
			) : (
				<OrderInput placeholder="배송 요청사항" />
			)}
			{contact && user ? (
				<div className="divided-input">
					<OrderInput
						type="number"
						placeholder="Phone Number"
						onChange={formValidateHandler}
					/>
					{!formdata.phoneValid ? (
						<InvalidP>유효하지 않은 번호입니다.</InvalidP>
					) : null}
				</div>
			) : null}
		</OrderInputDiv>
	);
};

export default OrderInputs;
