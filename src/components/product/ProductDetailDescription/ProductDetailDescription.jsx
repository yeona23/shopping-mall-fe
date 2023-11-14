import { useEffect, useState } from 'react';
import { DescriptionSection, ImgWrap } from './ProductDetailDescription.style';

const ProductDetailDescription = () => {
	const [images, setImages] = useState('');

	useEffect(() => {
		fetch('/data/detail-images.json')
			.then((response) => response.json())
			.then((data) => setImages(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<DescriptionSection>
			<p>
				어디에나 쉽게 어울릴 깔끔 베이직한 디자인으로 데일리룩, 출근룩에 가볍게
				즐겨주세요
			</p>
			<ul>
				{images &&
					images.map((image, index) => (
						<ImgWrap key={index}>
							<img src={image.src} alt={image.alt} />
						</ImgWrap>
					))}
			</ul>
		</DescriptionSection>
	);
};

export default ProductDetailDescription;
