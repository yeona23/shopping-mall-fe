import SubThemeBox from '../../components/Main/SubThemeBox';
import MainSwiper from '../../components/Swiper/MainSwiper';
import SubSwiper from '../../components/Swiper/SubSwiper';

const Home = () => {
	return (
		<>
			<MainSwiper />
			<SubSwiper dataTitle="NEW ARRIVAL" />
			<SubThemeBox dataTitle="OUTER" />
			<SubThemeBox dataTitle="TOP" />
			<SubThemeBox dataTitle="BOTTOM" />
			<SubThemeBox dataTitle="ACC" />
		</>
	);
};

export default Home;
