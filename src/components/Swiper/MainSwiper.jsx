import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MainSwiperContainer, SwiperImg, SwiperWrap } from './MainSwiper.style';

const MainSwiper = () => {
	return (
		<MainSwiperContainer>
			<Swiper
				loop={false}
				spaceBetween={0}
				slidesPerView={1}
				grabCursor={true}
				allowTouchMove={true}
				cssMode={false}
				navigation={true}
				modules={[Navigation]}
				className="swiper">
				<SwiperSlide className="swiper-slide">
					<img src="/assets/main-slide1.png" alt="dress1" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/assets/main-slide2.png" alt="dress2" />
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<img src="/assets/main-slide3.png" alt="dress3" />
				</SwiperSlide>
			</Swiper>
		</MainSwiperContainer>
	);
};

export default MainSwiper;
