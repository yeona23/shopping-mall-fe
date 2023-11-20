import { useEffect, useState } from 'react';
import { SellerMainContainer } from './SellerMain.style';
import { SET_SELL_PRODUCT } from '../../../slice/productSlice';
import { useSelector } from 'react-redux';

const SellerMain = ({ onSubmit }) => {
	const [inputValue, setInputValue] = useState({});

	const inputImageHandler = (e) => {
		const { name, files } = e.target;
		setInputValue({ ...inputValue, [name]: files[0].name });
	};

	const inputDetailImageHandler = (e) => {
		const { name, files } = e.target;
		const filesArray = Array.from(files);
		const filesMap = filesArray.map((file) => file.name);

		setInputValue({ ...inputValue, [name]: filesMap });
	};

	const inputChangeHandler = (e) => {
		const { name, value } = e.target;

		setInputValue({ ...inputValue, [name]: value });
	};

	useEffect(() => {
		onSubmit(inputValue);
	}, [inputValue]);

	return (
		<SellerMainContainer>
			<div>
				<label htmlFor="name">품명</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={inputChangeHandler}
				/>
			</div>
			<div>
				<label htmlFor="price">판매가</label>
				<input
					type="text"
					id="price"
					name="price"
					onChange={inputChangeHandler}
				/>
				<span>원</span>
			</div>
			<div>
				<label htmlFor="discount">할인율</label>
				<input
					type="text"
					id="discount"
					name="discount"
					onChange={inputChangeHandler}
				/>
				<span>%</span>
			</div>
			<div>
				<label htmlFor="stock">재고</label>
				<input
					type="text"
					id="stock"
					name="stock"
					onChange={inputChangeHandler}
				/>
				<span>개</span>
			</div>
			<div>
				<label htmlFor="main_category">메인 카테고리</label>
				<select
					id="main_category"
					name="main_category"
					onChange={inputChangeHandler}>
					<option>- [필수] 메인 카테고리를 선택해주세요 -</option>
					<option disabled>------------------------------</option>
					<option value="outer">아우터</option>
					<option value="top">상의</option>
					<option value="bottom">하의</option>
					<option value="acc">악세사리</option>
				</select>
			</div>
			<div>
				<label htmlFor="sub_category">서브 카테고리</label>
				<select
					id="sub_category"
					name="sub_category"
					onChange={inputChangeHandler}>
					<option>- [필수] 서브 카테고리를 선택해주세요 -</option>
					<option disabled>------------------------------</option>
					<option value="jacket">자켓</option>
					<option value="coat">코트</option>
					<option value="cardigan">가디건</option>
					<option value="knit">니트</option>
					<option value="tshirts">티셔츠</option>
					<option value="blouse">블라우스</option>
					<option value="pants">바지</option>
					<option value="skirts">스커트</option>
					<option value="shoes">신발</option>
					<option value="bags">가방</option>
					<option value="etc">기타제품</option>
				</select>
			</div>
			<div>
				<label htmlFor="thumb_nail">썸네일 이미지</label>
				<input
					type="file"
					id="thumb_nail"
					name="thumb_nail"
					onChange={inputImageHandler}
				/>
			</div>
			<div>
				<label htmlFor="detail_image">상세 이미지</label>
				<input
					type="file"
					id="detail_image"
					name="detail_image"
					multiple
					onChange={inputDetailImageHandler}
				/>
			</div>
			<div>
				<label htmlFor="description_image">설명 이미지</label>
				<input
					type="file"
					id="description_image"
					name="description_image"
					onChange={inputImageHandler}
				/>
			</div>
			<div>
				<label htmlFor="description">상세 설명</label>
				<input
					type="text"
					id="description"
					name="description"
					onChange={inputChangeHandler}
				/>
			</div>
			<div>
				<label htmlFor="enroll">등록 날짜</label>
				<input
					type="date"
					id="enroll"
					name="enroll"
					onChange={inputChangeHandler}
				/>
			</div>
		</SellerMainContainer>
	);
};

export default SellerMain;
