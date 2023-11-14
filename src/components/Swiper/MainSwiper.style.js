import { styled } from 'styled-components';

export const MainSwiperContainer = styled.div`
	.swiper {
		width: 100%;
		overflow: hidden;
		height: 80vh;
		margin-bottom: 250px;
	}

	.swiper-wrapper {
		width: inherit;
	}

	.swiper-slide {
		width: 100%;
	}

	.swiper-slide img {
		width: 100%;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--color-coconut);
		font-size: 30px;
	}
`;
