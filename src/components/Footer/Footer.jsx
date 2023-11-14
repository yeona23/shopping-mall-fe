import {
	FOOTER,
	FooterLi,
	FooterText,
	FooterUl,
	FtBox,
	FtContainer,
	FtCopyright,
	SocialLi,
} from './Footer.style';

const Footer = () => {
	return (
		<FtBox>
			<div>
				<FtContainer>
					<img src="/assets/footer-logo.svg" alt="footer-logo" />
					<FooterText>
						<FooterUl>
							<FooterLi>ABOUT US</FooterLi>
							<FooterLi>address</FooterLi>
							<FooterLi>Seoul, Yong-san 65-100</FooterLi>
							<FooterLi>tel</FooterLi>
							<FooterLi>02-1234-5683</FooterLi>
						</FooterUl>
						<FooterUl>
							<FooterLi>BANK</FooterLi>
							<FooterLi>KB Bank</FooterLi>
							<FooterLi>148-05-4840-484817</FooterLi>
							<FooterLi>Woori Bank</FooterLi>
							<FooterLi>135-58-0595-878840</FooterLi>
						</FooterUl>
						<FooterUl>
							<FooterLi>SOCIAL</FooterLi>
							<SocialLi>instagram</SocialLi>
							<SocialLi>facebook</SocialLi>
						</FooterUl>
					</FooterText>
				</FtContainer>
				<FtCopyright>©copyright. 2023 SC Shop </FtCopyright>
			</div>
		</FtBox>
	);
};

export default Footer;
