import React, { useState } from 'react';
import {
	ItemDescDiv,
	ItemNameP,
	ItemOptionsP,
	ItemQuantityBtn,
	ItemQuantityDiv,
	ItemQuantityInput,
} from './CartItemDesc.style';

const CartItemDesc = () => {
	const [inputValue, setInputValue] = useState(1);
	const minusHandler = () => {
		if (inputValue === 1) return;
		setInputValue(inputValue - 1);
	};
	const plusHandler = () => {
		setInputValue(inputValue + 1);
	};
	return (
		<ItemDescDiv>
			<div>
				<ItemNameP>Item name</ItemNameP>
				<ItemOptionsP>option1</ItemOptionsP>
				<ItemOptionsP>option2</ItemOptionsP>
			</div>
			<ItemQuantityDiv>
				<ItemQuantityBtn onClick={minusHandler}>
					<img src={'/assets/minus.svg'} alt="-" />
				</ItemQuantityBtn>
				<ItemQuantityInput type="number" value={inputValue} min={1} max={100} />
				<ItemQuantityBtn onClick={plusHandler}>
					<img src={'/assets/plus.svg'} alt="+" />
				</ItemQuantityBtn>
			</ItemQuantityDiv>
		</ItemDescDiv>
	);
};

export default CartItemDesc;
