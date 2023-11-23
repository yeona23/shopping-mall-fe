import SubThemeBox from '../../components/Main/SubThemeBox';
import MainSwiper from '../../components/Swiper/MainSwiper';
import SubSwiper from '../../components/Swiper/SubSwiper';

const Home = () => {
	return (
		<>
			<MainSwiper />
			<SubSwiper dataTitle="new arrival" />
			<SubThemeBox dataTitle="outer" />
			<SubThemeBox dataTitle="top" />
			<SubThemeBox dataTitle="bottom" />
			<SubThemeBox dataTitle="acc" />
		</>
	);
};

export default Home;
