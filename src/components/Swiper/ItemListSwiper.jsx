import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { ItemContainer, ItemImg } from './Swiper.styled';

const ItemListSwiper = () => {
	SwiperCore.use([Grid, Pagination]);
	return (
		<ItemContainer>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				slidesPerGroup={1}
				grid={{
					row: 4,
					fill: 4,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Grid, Pagination]}
				className="swiper">
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>1</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main2.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>2</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>3</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>4</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>5</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>6</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>7</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>8</span>
				</SwiperSlide>
				<SwiperSlide>
					<ItemImg>
						<img src="/assets/main1.jpg" alt="" />
					</ItemImg>
					<p>sdfgggr</p>
					<span>9</span>
				</SwiperSlide>
			</Swiper>
		</ItemContainer>
	);
};

export default ItemListSwiper;
