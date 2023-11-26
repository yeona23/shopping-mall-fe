import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { CartItemCheckInput } from './CheckboxInput.style';

const CheckboxInput = ({ item, checkedSingleItemHandler, checkedItemsId }) => {
	const checkInputHandler = (e) => {
		checkedSingleItemHandler(item.productId, e.target.checked);
	};
	return (
		<>
			<CartItemCheckInput
				type="checkbox"
				id={item.productId}
				onClick={checkInputHandler}
				checked={checkedItemsId.includes(item.productId) ? true : false}
			/>
			<label htmlFor={item.productId}>
				<FiCheck
					style={{
						color: '#fff',
						width: '14px',
						height: '14px',
					}}
				/>
			</label>
		</>
	);
};

export default CheckboxInput;
