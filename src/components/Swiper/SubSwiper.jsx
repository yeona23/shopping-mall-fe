import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CategoryTitle, SlideImg, SubSwiperContainer } from './Swiper.style';
import { MoreBtn } from '../Main/Main.style';
const SubSwiper = ({ dataTitle }) => {
	let backgroundColor = '';
	if (dataTitle === 'OUTER' || dataTitle === 'BOTTOM') {
		backgroundColor = 'var(--color-coconut)';
	}

	return (
		<SubSwiperContainer backgroundColor={backgroundColor}>
			<CategoryTitle>{dataTitle}</CategoryTitle>
			<Swiper
				loop={false}
				spaceBetween={20}
				slidesPerView={4}
				slidesPerGroup={4}
				grabCursor={true}
				allowTouchMove={true}
				cssMode={false}
				navigation={true}
				modules={[Navigation]}
				className="swiper">
				<div className="swiper-wrapper">
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main1.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main2.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main3.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main4.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main1.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main1.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<SlideImg>
							<img src="/assets/main1.jpg" alt="" />
						</SlideImg>
						<p>fhjsdbfvyuf</p>
						<span>20,000won</span>
					</SwiperSlide>
				</div>
			</Swiper>
			<MoreBtn>MORE</MoreBtn>
		</SubSwiperContainer>
	);
};

export default SubSwiper;
