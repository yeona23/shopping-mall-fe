import React, { useEffect, useState } from 'react';
import { CartItemCheckInput } from '../../../pages/Cart/Cart.style';
import { CartHeaderDiv } from './CartHeader.style';
import { FiCheck } from 'react-icons/fi';
import CheckboxInput from './../CartUI/CheckboxInput';

const CartHeader = ({ checkedAllItemHandler, cartItem, checkedItemsId }) => {
	const allCheckboxHandler = (e) => {
		checkedAllItemHandler(e.target.checked);
	};

	return (
		<CartHeaderDiv>
			<div>
				<CartItemCheckInput
					id="all"
					type="checkbox"
					onChange={allCheckboxHandler}
					checked={cartItem.length === checkedItemsId.length ? true : false}
				/>
				<label htmlFor="all">
					<FiCheck
						style={{
							color: '#fff',
							width: '14px',
							height: '14px',
						}}
					/>
				</label>
			</div>
			<p>상품 정보</p>
			<p>상품 관리</p>
		</CartHeaderDiv>
	);
};

export default CartHeader;
