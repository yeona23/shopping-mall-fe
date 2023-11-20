import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CategoryTitle, SubItemBox, SubSwiperContainer } from './Swiper.style';
import { MoreBtn } from '../Main/Main.style';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/productApi';
import { SET_PRODUCTS } from '../../slice/productSlice';

const ProductItem = ({ price, itemTitle, thumbnail }) => (
	<SubItemBox>
		<div>
			<img src={thumbnail} alt={itemTitle} />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</SubItemBox>
);

const SubSwiper = ({ dataTitle }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [clickTypeBtn, setClickTypeBtn] = useState();

	const products = useSelector((state) => state.product.slice(0, 10));

	const clickTypeNewHandler = () => {
		const url = '/products/?type=new';
		navigate(url);
	};

	const clickProductItem = (product_id) => {
		const url = `/product/${product_id}`;
		navigate(url);
	};

	return (
		<SubSwiperContainer>
			<CategoryTitle>{dataTitle.toUpperCase()}</CategoryTitle>
			<Swiper
				loop={false}
				spaceBetween={20}
				slidesPerView={1}
				// slidesPerGroup={4}
				grabCursor={true}
				allowTouchMove={true}
				cssMode={false}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					1320: {
						slidesPerView: 4,
					},
					750: {
						slidesPerView: 3,
					},
				}}
				className="swiper">
				<div className="swiper-wrapper">
					{products.map((product) => (
						<SwiperSlide
							key={product.productId}
							className="swiper-slide"
							onClick={() => clickProductItem(product.productId)}>
							<ProductItem
								itemTitle={product.name}
								thumbnail={product.productImg[1]}
								price={product.price}
							/>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
			<MoreBtn onClick={clickTypeNewHandler}>MORE</MoreBtn>
		</SubSwiperContainer>
	);
};

export default SubSwiper;
