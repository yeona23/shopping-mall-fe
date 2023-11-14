import MainSwiper from '../../components/Swiper/MainSwiper';
import SubSwiper from '../../components/Swiper/SubSwiper';

const Home = () => {
	return (
		<>
			<MainSwiper />
			<SubSwiper dataTitle="NEW ARRIVAL" />
			<SubSwiper dataTitle="OUTER" />
			<SubSwiper dataTitle="TOP" />
			<SubSwiper dataTitle="BOTTOM" />
			<SubSwiper dataTitle="ACC" />
		</>
	);
};

export default Home;
