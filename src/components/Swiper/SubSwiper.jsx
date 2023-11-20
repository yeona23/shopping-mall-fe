import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CategoryTitle, SubSwiperContainer } from './Swiper.style';
import { MoreBtn } from '../Main/Main.style';
import { subItemBox } from './Swiper.style';

const generateImgUrl = (dataTitle, index) => {
	const maxIndex = 4;
	const actualIndex = index <= maxIndex ? index : (index % maxIndex) + 1;
	return dataTitle === 'OUTER'
		? `/assets/jacket_${actualIndex}/jacket_${actualIndex}_thumb.jpg`
		: `/assets/knit_${actualIndex}/knit_${actualIndex}_thumb.jpg`;
};
const ProductItem = ({ dataTitle, index, price, itemTitle }) => (
	<subItemBox>
		<div>
			<img src={generateImgUrl(dataTitle, index)} alt=" " />
		</div>
		<p>{itemTitle}</p>
		<span>{price}</span>
	</subItemBox>
);

const SubSwiper = ({ dataTitle }) => {
	const items = Array.from({ length: 10 }, (_, index) => ({
		id: index + 1,
		index: index + 1,
		itemTitle: 'gvbhdfgwysfuygsf',
		price: '65,000won',
	}));

	return (
		<SubSwiperContainer>
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
					{items.map((item) => (
						<SwiperSlide key={item.id} className="swiper-slide">
							<ProductItem dataTitle={dataTitle} {...item} />
						</SwiperSlide>
					))}
				</div>
			</Swiper>
			<MoreBtn>MORE</MoreBtn>
		</SubSwiperContainer>
	);
};

export default SubSwiper;
