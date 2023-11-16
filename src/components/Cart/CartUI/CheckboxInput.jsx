import React, { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { CartItemCheckInput } from './CheckboxInput.style';

const CheckboxInput = ({ item, checkedSingleItemHandler, checkedItemsId }) => {
	const checkInputHandler = (e) => {
		checkedSingleItemHandler(item.id, e.target.checked);
	};
	return (
		<>
			<CartItemCheckInput
				type="checkbox"
				id={item.id}
				onClick={checkInputHandler}
				checked={checkedItemsId.includes(item.id) ? true : false}
			/>
			<label htmlFor={item.id}>
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
