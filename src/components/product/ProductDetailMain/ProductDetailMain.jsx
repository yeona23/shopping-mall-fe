import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import {
	ImageItem,
	ImgArticle,
	ImgListWrap,
	ImgWrap,
	MainWrap,
} from './ProductDetailMain.style';
import ProductInfo from '../ProductInfo/ProductInfo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetailMain = () => {
	const topSwiperRef = useRef(null);
	const bottomSwiperRef = useRef(null);

	const { productId } = useParams();

	const productsData = useSelector((state) => state.product);

	console.log(productsData);

	const productIdData = productsData.find(
		(product) => String(product.productId) === String(productId),
	);

	const detailImages = productIdData
		? productIdData?.productImg.filter((_, index) => index !== 0 && index !== 1)
		: [];

	const handleBottomSwiperSlideClick = (index) => {
		if (topSwiperRef.current && bottomSwiperRef.current) {
			topSwiperRef.current.swiper.slideTo(index);
		}
	};

	return (
		<MainWrap>
			<ImgArticle>
				<Swiper
					ref={topSwiperRef}
					loop={false}
					slidesPerView={1}
					grabCursor={true}
					allowTouchMove={true}
					cssMode={false}
					navigation={true}
					modules={[Navigation, Mousewheel]}
					mousewheel={{ forceToAxis: true }}
					className="main-img-swiper">
					{detailImages &&
						detailImages.map((image, index) => (
							<SwiperSlide key={index}>
								<ImgWrap>
									<img src={image} />
								</ImgWrap>
							</SwiperSlide>
						))}
				</Swiper>
				<ImgListWrap>
					<ul>
						<Swiper
							ref={bottomSwiperRef}
							loop={false}
							spaceBetween={5}
							slidesPerView={5}
							slidesPerGroup={5}
							grabCursor={true}
							allowTouchMove={true}
							cssMode={false}
							navigation={true}
							modules={[Navigation, Mousewheel]}
							mousewheel={{ forceToAxis: true }}
							className="sub-img-swiper">
							{detailImages &&
								detailImages.map((image, index) => (
									<SwiperSlide
										key={index}
										className="sub-img-slide"
										onClick={() => handleBottomSwiperSlideClick(index)}>
										<ImageItem>
											<img src={image} />
										</ImageItem>
									</SwiperSlide>
								))}
						</Swiper>
					</ul>
				</ImgListWrap>
			</ImgArticle>
			<ProductInfo />
		</MainWrap>
	);
};

export default ProductDetailMain;
