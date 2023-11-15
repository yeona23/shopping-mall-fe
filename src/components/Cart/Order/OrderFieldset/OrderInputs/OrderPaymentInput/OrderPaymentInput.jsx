import React, { useState } from 'react';
import { OrderPaymentLabel, OrderPaymentLi } from './OrderPaymentInput.style';
import { OrderInput, OrderInputDiv } from '../OrderInputs.style';
const OrderPaymentInput = () => {
	const [creditChecked, setCreditChecked] = useState(true);
	const cardPayHandler = () => {
		setCreditChecked(true);
	};
	const clickHandler = () => {
		setCreditChecked(false);
	};
	return (
		<ul>
			<OrderPaymentLi onClick={cardPayHandler}>
				<input type="radio" id="credit-card" name="payment" defaultChecked />
				<OrderPaymentLabel htmlFor="credit-card">Credit Card</OrderPaymentLabel>
			</OrderPaymentLi>
			{creditChecked && (
				<OrderInputDiv>
					<OrderInput
						className="divided-input"
						type="text"
						placeholder="Card Number"
					/>
					<OrderInput
						className="divided-input"
						type="text"
						placeholder="Cardholder Full Name"
					/>
					<OrderInput
						className="divided-input"
						type="text"
						placeholder="Expiry Date(MM/YY)"
					/>
					<OrderInput className="divided-input" type="text" placeholder="CVV" />
				</OrderInputDiv>
			)}
			<OrderPaymentLi onClick={clickHandler} className="ani">
				<input type="radio" id="naver-pay" name="payment" />
				<OrderPaymentLabel htmlFor="naver-pay">Naver Pay</OrderPaymentLabel>
			</OrderPaymentLi>
			<OrderPaymentLi onClick={clickHandler}>
				<input type="radio" id="kakao-pay" name="payment" />
				<OrderPaymentLabel htmlFor="kakao-pay">Kakao Pay</OrderPaymentLabel>
			</OrderPaymentLi>
			<OrderPaymentLi onClick={clickHandler}>
				<input type="radio" id="google-pay" name="payment" />
				<OrderPaymentLabel htmlFor="google-pay">Google Pay</OrderPaymentLabel>
			</OrderPaymentLi>
		</ul>
	);
};

export default OrderPaymentInput;
