import MainSwiper from '../../components/Swiper/MainSwiper';
import SubSwiper from '../../components/Swiper/SubSwiper';

const Home = () => {
	return (
		<>
			<MainSwiper />
			<SubSwiper dataTitle="NEW ARRIVAL" />
			<SubSwiper dataTitle="DRESS" />
			<SubSwiper dataTitle="TOP" />
			<SubSwiper dataTitle="BOTTOM" />
		</>
	);
};

export default Home;
