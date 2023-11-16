import React, { useState } from 'react';
import {
	FilterPriceRangeMax,
	FilterPriceRangeMin,
	FilterPriceRangeWrap,
	FilterPriceSlide,
	PriceLabelBox,
} from './Pagination.style';

const FTPrice = () => {
	const fixedMinPrice = 0;
	const fixedMaxPrice = 300000;
	const priceGap = 1000;
	const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice);
	const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);

	const priceRangeMinValueHandler = (e) => {
		setRangeMinValue(parseInt(e.target.value));
	};

	const priceRangeMaxValueHandler = (e) => {
		setRangeMaxValue(parseInt(e.target.value));
	};

	const twoRangeHandler = () => {
		if (rangeMaxValue - rangeMinValue < priceGap) {
			setRangeMaxValue(rangeMinValue + priceGap);
			setRangeMinValue(rangeMaxValue - priceGap);
		}
	};
	return (
		<div>
			<h3>price</h3>
			<FilterPriceSlide />
			<FilterPriceRangeWrap>
				<FilterPriceRangeMin
					type="range"
					min={fixedMinPrice}
					max={fixedMaxPrice - priceGap}
					step="1000"
					value={rangeMinValue}
					onChange={(e) => {
						priceRangeMinValueHandler(e);
						twoRangeHandler();
					}}
					id="priceMin"
				/>
				<FilterPriceRangeMax
					type="range"
					min={fixedMinPrice + priceGap}
					max={fixedMaxPrice}
					step="1000"
					value={rangeMaxValue}
					onChange={(e) => {
						priceRangeMaxValueHandler(e);
						twoRangeHandler();
					}}
					id="priceMax"
				/>
			</FilterPriceRangeWrap>
			<PriceLabelBox>
				<div>
					<label htmlFor="priceMin">₩{rangeMinValue}</label>
				</div>
				<span>~</span>
				<div>
					<label htmlFor="priceMax">₩{rangeMaxValue}</label>
				</div>
			</PriceLabelBox>
		</div>
	);
};

export default FTPrice;
