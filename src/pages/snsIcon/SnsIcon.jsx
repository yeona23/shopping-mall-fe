import React from 'react';
import { Button, ButtonWrapper, Image } from './SnsIcon.style';

const SnsIcon = () => {
	return (
		<ButtonWrapper>
			<Button>
				<Image src="/assets/icons/icon-kakao.png" alt="kakao-icon" />
			</Button>
			<Button>
				<Image src="/assets/icons/icon-naver.png" alt="twitter-icon" />
			</Button>
			<Button icon="apple">
				<Image src="/assets/icons/icon-apple.svg" alt="apple-icon" />
			</Button>
			<Button icon="google">
				<Image src="/assets/icons/icon-google.svg" alt="google-icon" />
			</Button>
		</ButtonWrapper>
	);
};

export default SnsIcon;
