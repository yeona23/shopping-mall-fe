import { useState } from 'react';
import { SellerMainContainer } from './SellerMain.style';

const SellerMain = () => {
	const [inputValue, setInputValue] = useState([]);

	const inputChangeHandler = (e) => {
		const files = Array.from(e.target.files);
		setInputValue(files);
	};

	return (
		<SellerMainContainer>
			<div>
				<label htmlFor="product-name">품명</label>
				<input type="text" id="product-name" name="product-name" />
			</div>
			<div>
				<label htmlFor="price">판매가</label>
				<input type="text" id="price" name="price" />
				<span>원</span>
			</div>
			<div>
				<label htmlFor="discount">할인율</label>
				<input type="text" id="discount" name="discount" />
				<span>%</span>
			</div>
			<div>
				<label htmlFor="stock">재고</label>
				<input type="text" id="stock" name="stock" />
				<span>개</span>
			</div>
			<div>
				<label htmlFor="main-category">메인 카테고리</label>
				<select id="main-category" name="main-category">
					<option>- [필수] 메인 카테고리를 선택해주세요 -</option>
					<option disabled>------------------------------</option>
					<option value="outer">아우터</option>
					<option value="top">상의</option>
					<option value="bottom">하의</option>
					<option value="acc">악세사리</option>
				</select>
			</div>
			<div>
				<label htmlFor="sub-category">서브 카테고리</label>
				<select id="sub-category" name="sub-category">
					<option>- [필수] 서브 카테고리를 선택해주세요 -</option>
					<option disabled>------------------------------</option>
					<option value="outer">자켓</option>
					<option value="top">코트</option>
					<option value="bottom">가디건</option>
					<option value="acc">니트</option>
					<option value="acc">셔츠</option>
					<option value="acc">블라우스</option>
					<option value="acc">바지</option>
					<option value="acc">스커트</option>
					<option value="acc">신발</option>
					<option value="acc">가방</option>
					<option value="acc">기타제품</option>
				</select>
			</div>
			<div>
				<label htmlFor="thumb-nail">썸네일 이미지</label>
				<input type="file" id="thumb-nail" name="thumb-nail" />
			</div>
			<div>
				<label htmlFor="detail-images">상세 이미지</label>
				<input
					type="file"
					id="detail-images"
					name="detail-images"
					multiple
					onChange={inputChangeHandler}
				/>
			</div>
			<div>
				<label htmlFor="description-image">설명 이미지</label>
				<input type="file" id="description-image" name="description-image" />
			</div>
		</SellerMainContainer>
	);
};

export default SellerMain;
