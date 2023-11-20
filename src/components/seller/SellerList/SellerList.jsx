import { useEffect, useState } from 'react';
import { getUserSellProducts } from '../../../api/productApi';
import {
	Button,
	ButtonsWrap,
	DiscountWrap,
	ImgWrap,
	ItemInfoWrap,
	ItemTitle,
	PriceAndButtonsWrap,
	SellerListContainer,
	SellerListItem,
	StockWrap,
} from './SellerList.style';

const SellerList = () => {
	const [sellerProductList, setSellerProductList] = useState([]);

	const fetchGetSellProducts = async () => {
		const response = await getUserSellProducts();

		console.log(response);
		setSellerProductList(response);
	};

	useEffect(() => {
		fetchGetSellProducts();
	}, []);

	return (
		<SellerListContainer>
			<ul>
				{sellerProductList &&
					sellerProductList.map((product) => (
						<SellerListItem key={product.productId}>
							<ImgWrap>
								<img src="" alt="" />
							</ImgWrap>
							<ItemInfoWrap>
								<ItemTitle>{product.productName}</ItemTitle>
								<div>카테고리 : {product.category}</div>
								<DiscountWrap>
									<label htmlFor="">할인율</label>
									<div>
										<button>-</button>
										<input type="text" value="1" />
										<button>+</button>
									</div>
									<span>%</span>
								</DiscountWrap>
								<StockWrap>
									<label htmlFor="">재고</label>
									<div>
										<button>-</button>
										<input type="text" value={product.productStock} />
										<button>+</button>
									</div>
									<span>개</span>
								</StockWrap>
							</ItemInfoWrap>
							<PriceAndButtonsWrap>
								<div>{product.productPrice}원</div>
								<ButtonsWrap>
									<Button>삭제</Button>
									<Button>저장</Button>
								</ButtonsWrap>
							</PriceAndButtonsWrap>
						</SellerListItem>
					))}
			</ul>
		</SellerListContainer>
	);
};

export default SellerList;
