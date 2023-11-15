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

const ProductDetailMain = () => {
	const [images, setImages] = useState('');
	const topSwiperRef = useRef(null);
	const bottomSwiperRef = useRef(null);

	useEffect(() => {
		fetch('/data/detail-images.json')
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error(error));
	}, []);

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
					{images &&
						images.map((image, index) => (
							<SwiperSlide key={index}>
								<ImgWrap>
									<img src={image.src} alt={image.alt} />
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
							{images &&
								images.map((image, index) => (
									<SwiperSlide
										key={index}
										className="sub-img-slide"
										onClick={() => handleBottomSwiperSlideClick(index)}>
										<ImageItem>
											<img src={image.src} alt={image.alt} />
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
