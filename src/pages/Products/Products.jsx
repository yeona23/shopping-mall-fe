import React from 'react';
import { useLocation } from 'react-router-dom';
import Outer from '../../components/Category/Outer/Outer';
import New from '../../components/Category/New/New';
import Top from '../../components/Category/Top/Top';
import Bottom from '../../components/Category/Bottom/Bottom';
import Acc from '../../components/Category/Acc/Acc';

const Products = () => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const type = query.get('type');
	const subType = query.get('subType');

	// 예시 데이터, API로 받아올 데이터
	const data = [];

	// ProductsBox 필터링 조건 넣기!
	const filteredData = data.filter((item) => {
		return type === item.type && (!subType || subType === item.subType);
	});

	if (type === 'new') {
		return subType ? (
			<New data={filteredData} subType={subType} />
		) : (
			<New type="new" data={filteredData} />
		);
	}

	if (type === 'outer') {
		return subType ? (
			<Outer data={filteredData} subType={subType} />
		) : (
			<Outer type="outer" data={filteredData} />
		);
	}

	if (type === 'top') {
		return subType ? (
			<Top data={filteredData} subType={subType} />
		) : (
			<Top type="top" data={filteredData} />
		);
	}

	if (type === 'bottom') {
		return subType ? (
			<Bottom data={filteredData} subType={subType} />
		) : (
			<Bottom type="bottom" data={filteredData} />
		);
	}

	if (type === 'acc') {
		return subType ? (
			<Acc data={filteredData} subType={subType} />
		) : (
			<Acc type="acc" data={filteredData} />
		);
	}

	return null;
};

export default Products;
