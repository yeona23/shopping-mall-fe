import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import {
	AddedItemWrap,
	BasePrice,
	Button,
	ButtonWrap,
	CartButton,
	CountAndPriceWrap,
	CountButton,
	Divider,
	ImageItem,
	ImgArticle,
	ImgListWrap,
	ImgWrap,
	InfoArticle,
	MainWrap,
	PayButton,
	PriceWrap,
	SalePercent,
	SalePrice,
	SaledPrice,
	SelectWrap,
	Title,
	TotalPriceWrap,
} from './ProductDetailMain.style';

const ProductDetailMain = () => {
	const [images, setImages] = useState('');

	useEffect(() => {
		fetch('/data/detail-images.json')
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<MainWrap>
			<ImgArticle>
				<Swiper
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
									<SwiperSlide key={index} className="sub-img-slide">
										<ImageItem>
											<img src={image.src} alt={image.alt} />
										</ImageItem>
									</SwiperSlide>
								))}
						</Swiper>
					</ul>
				</ImgListWrap>
			</ImgArticle>
			<InfoArticle>
				<Title>골드 코인 장식 스웨이드 페니로퍼</Title>
				<PriceWrap>
					<BasePrice>65,000</BasePrice>
					<span> / </span>
					<SalePrice>45,500</SalePrice>
					<SalePercent>30%</SalePercent>
				</PriceWrap>
				<SaledPrice>총 33,000원 할인</SaledPrice>
				<SelectWrap>
					<div>색상</div>
					<div>
						<select name="" id="">
							<option value="">- [필수] 색상을 선택해주세요 -</option>
							<option value="" disabled>
								---------------------
							</option>
							<option value="">Red</option>
							<option value="">Blue</option>
							<option value="">Yellow</option>
							<option value="">Black</option>
							<option value="">Brown</option>
							<option value="">Beige</option>
						</select>
					</div>
				</SelectWrap>
				<SelectWrap>
					<div>사이즈</div>
					<div>
						<select name="" id="">
							<option value="">- [필수] 사이즈를 선택해주세요 -</option>
							<option value="" disabled>
								---------------------
							</option>
							<option value="">XS</option>
							<option value="">S</option>
							<option value="">M</option>
							<option value="">L</option>
							<option value="">XL</option>
						</select>
					</div>
				</SelectWrap>
				<Divider />
				<div>
					<AddedItemWrap>
						<div>
							<span>Brown</span>
							<span> / </span>
							<span>230</span>
						</div>
						<CountAndPriceWrap>
							<div>
								<CountButton>-</CountButton>
								<span>1</span>
								<CountButton>+</CountButton>
							</div>
							<div>
								<span>45,500원</span>
								<Button>X</Button>
							</div>
						</CountAndPriceWrap>
					</AddedItemWrap>
					<AddedItemWrap>
						<div>
							<span>Beige</span>
							<span> / </span>
							<span>250</span>
						</div>
						<CountAndPriceWrap>
							<div>
								<CountButton>-</CountButton>
								<span>1</span>
								<CountButton>+</CountButton>
							</div>
							<div>
								<span>45,500원</span>
								<Button>X</Button>
							</div>
						</CountAndPriceWrap>
					</AddedItemWrap>
				</div>
				<Divider />
				<TotalPriceWrap>
					<span>총 금액</span>
					<div>
						<span>91,000원</span>
						<span>(2개)</span>
					</div>
				</TotalPriceWrap>
				<Divider />
				<ButtonWrap>
					<CartButton>장바구니</CartButton>
					<PayButton>구매하기</PayButton>
				</ButtonWrap>
			</InfoArticle>
		</MainWrap>
	);
};

export default ProductDetailMain;
