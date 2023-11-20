import { useEffect, useState } from 'react';
import AddedItem from '../AddedItem/AddedItem';
import {
	BasePrice,
	ButtonWrap,
	CartButton,
	Divider,
	InfoArticle,
	PayButton,
	PriceWrap,
	SalePercent,
	SalePrice,
	SaledPrice,
	SelectWrap,
	Title,
	TotalPriceWrap,
} from './ProductInfo.style';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductInfo = () => {
	const { productId } = useParams();

	const productsData = useSelector((state) => state.product);

	const productIdData = productsData.find(
		(product) => String(product.id) === String(productId),
	);

	const PRICE = productIdData?.price;
	const DISCOUNT = productIdData?.discount;
	const formattedPrice = PRICE?.toLocaleString();
	const discountPrice = Math.round((PRICE * (100 - DISCOUNT)) / 10000) * 100;
	const formattedDiscountPrice = discountPrice?.toLocaleString();

	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const [nextId, setNextId] = useState(0);
	const [addedItems, setAddedItems] = useState([]);

	const navigate = useNavigate();

	const colorValueHandler = (e) => {
		setColor(e.target.value);
	};

	const sizeValueHandler = (e) => {
		setSize(e.target.value);
	};

	const addItemHandler = () => {
		if (color && size) {
			const isItemDuplicate = addedItems.some(
				(item) => item.color === color && item.size === size,
			);

			if (!isItemDuplicate) {
				const newItem = {
					productId,
					id: nextId,
					color: color,
					size: size,
					count: 1,
				};
				setAddedItems([...addedItems, newItem]);
				setNextId(nextId + 1);
			} else {
				alert('이미 추가된 아이템입니다.');
			}
		}
	};

	const incrementItem = (itemId) => {
		setAddedItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, count: item.count + 1 } : item,
			),
		);
	};

	const decrementItem = (itemId) => {
		setAddedItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId && item.count > 1
					? { ...item, count: item.count - 1 }
					: item,
			),
		);
	};

	const removeItem = (itemId) => {
		setAddedItems((prevItems) =>
			prevItems.filter((item) => item.id !== itemId),
		);
	};

	const totalItemCount = addedItems.reduce(
		(total, item) => total + item.count,
		0,
	);

	const moveToTheCartPage = () => {
		navigate('/cart');
	};

	useEffect(() => {
		addItemHandler();
	}, [size]);

	return (
		<InfoArticle>
			<Title>{productIdData?.name}</Title>
			<PriceWrap>
				<BasePrice>{formattedPrice}</BasePrice>
				<span> / </span>
				<SalePrice>{formattedDiscountPrice}</SalePrice>
				<SalePercent>{DISCOUNT}%</SalePercent>
			</PriceWrap>
			<SaledPrice>
				총 {(PRICE - discountPrice).toLocaleString()}원 할인
			</SaledPrice>
			<SelectWrap>
				<div>색상</div>
				<div>
					<select name="color" id="color" onChange={colorValueHandler}>
						<option value="">- [필수] 색상을 선택해주세요 -</option>
						<option disabled>---------------------</option>
						<option value="brown">Brown</option>
						<option value="black">Black</option>
						<option value="beige">Beige</option>
						<option value="white">White</option>
						<option value="ivory">Ivory</option>
						<option value="navy">Navy</option>
						<option value="gray">Gray</option>
					</select>
				</div>
			</SelectWrap>
			<SelectWrap>
				<div>사이즈</div>
				<div>
					<select name="" id="" onChange={sizeValueHandler}>
						<option value="">- [필수] 사이즈를 선택해주세요 -</option>
						<option value="" disabled>
							---------------------
						</option>
						<option value="FREE">FREE</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
					</select>
				</div>
			</SelectWrap>
			<Divider />
			<div>
				{addedItems &&
					addedItems.map((item, index) => (
						<AddedItem
							key={index}
							color={item.color}
							size={item.size}
							price={discountPrice}
							count={item.count}
							onIncrement={() => incrementItem(item.id)}
							onDecrement={() => decrementItem(item.id)}
							onRemove={() => removeItem(item.id)}
						/>
					))}
			</div>
			<Divider />
			<TotalPriceWrap>
				<span>총 금액</span>
				<div>
					<span>{(discountPrice * totalItemCount).toLocaleString()}원</span>
					<span>({totalItemCount}개)</span>
				</div>
			</TotalPriceWrap>
			<Divider />
			<ButtonWrap>
				<CartButton onClick={moveToTheCartPage}>장바구니</CartButton>
				<PayButton>구매하기</PayButton>
			</ButtonWrap>
		</InfoArticle>
	);
};

export default ProductInfo;
