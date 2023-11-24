import React, { useState } from 'react';
import {
	BtnDiv,
	OptionsForm,
	OptionsSelect,
} from './CartItemChangingOptions.style';
import { CartBtn } from '../../CartUI/Button.style';
import { updateCartProduct } from '../../../../api/cartApi';

const CartItemChangingOpitons = ({
	optionChangeHandler,
	cartProductIdx,
	setOptionChanged,
	optionChanged,
}) => {
	const [selectedOptions, setSelectedOptions] = useState({
		color: '',
		size: '',
		quantity: 0,
	});
	const quantityOptions = [];
	for (let i = 1; i <= 50; i++) {
		quantityOptions.push(i);
	}

	const optionSubmitHandler = (e) => {
		e.preventDefault();
		updateCartProduct(cartProductIdx, selectedOptions);
		optionChangeHandler();
		setOptionChanged(!optionChanged);
	};

	const singleOptionHandler = (e) => {
		const { name, value } = e.target;
		setSelectedOptions({
			...selectedOptions,
			[name]: value,
		});
	};

	return (
		<OptionsForm onSubmit={optionSubmitHandler}>
			<OptionsSelect name="color" onChange={singleOptionHandler} required>
				<option value="">색상</option>
				<option value="Brown">Brown</option>
				<option value="Gray">Gray</option>
				<option value="Ivory">Ivory</option>
				<option value="Blue">Blue</option>
			</OptionsSelect>
			<OptionsSelect name="size" onChange={singleOptionHandler} required>
				<option value="">사이즈</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
			</OptionsSelect>
			<OptionsSelect name="quantity" onChange={singleOptionHandler} required>
				<option value="">수량</option>
				{quantityOptions.map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</OptionsSelect>
			<BtnDiv>
				<CartBtn size="48%" type="submit">
					저장
				</CartBtn>
				<CartBtn size="48%" onClick={optionChangeHandler}>
					취소
				</CartBtn>
			</BtnDiv>
		</OptionsForm>
	);
};

export default CartItemChangingOpitons;
