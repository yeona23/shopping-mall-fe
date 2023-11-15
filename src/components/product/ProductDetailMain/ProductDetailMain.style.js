import styled from 'styled-components';

export const MainWrap = styled.div`
	display: flex;
	align-items: start;
	padding: 10px;
`;

export const ImgArticle = styled.article`
	width: 50%;

	.main-img-swiper .swiper-button-prev {
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.main-img-swiper .swiper-button-prev:hover {
		color: #000000;
	}
	.main-img-swiper .swiper-button-next {
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.main-img-swiper .swiper-button-next:hover {
		color: #000000;
	}

	.main-img-swiper .swiper-button-prev:after,
	.main-img-swiper .swiper-button-next:after {
		font-size: 2rem;
		font-weight: bold;
	}
`;

export const ImgWrap = styled.div`
	width: 100%;
	& img {
		width: 100%;
	}
`;

export const ImgListWrap = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 120px;
	border: 0.5px solid #ededed;
	margin-top: 4px;
	padding: 4px 8px;

	& ul {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.sub-img-swiper .swiper-button-prev {
		background-color: rgba(199, 209, 201, 0.3);
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.sub-img-swiper .swiper-button-prev:hover {
		color: #000000;
	}
	.sub-img-swiper .swiper-button-next {
		background-color: rgba(199, 209, 201, 0.3);
		opacity: 1;
		color: #ffffff;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	.sub-img-swiper .swiper-button-next:hover {
		color: #000000;
	}

	.sub-img-swiper .swiper-button-prev:after,
	.sub-img-swiper .swiper-button-next:after {
		font-size: 1rem;
		font-weight: 600;
	}
`;

export const ImageItem = styled.li`
	height: 100%;
	list-style: none;
	cursor: pointer;

	& img {
		width: 100%;
		height: 100%;
	}
`;
