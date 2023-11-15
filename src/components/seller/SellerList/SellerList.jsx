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
	return (
		<SellerListContainer>
			<ul>
				<SellerListItem>
					<ImgWrap>
						<img src="/assets/main1.jpg" alt="" />
					</ImgWrap>
					<ItemInfoWrap>
						<ItemTitle>골드 코인 장식 스웨이드 페니로퍼</ItemTitle>
						<div>카테고리 : 슈즈</div>
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
								<input type="text" value="1" />
								<button>+</button>
							</div>
							<span>개</span>
						</StockWrap>
					</ItemInfoWrap>
					<PriceAndButtonsWrap>
						<div>45,500원</div>
						<ButtonsWrap>
							<Button>삭제</Button>
							<Button>저장</Button>
						</ButtonsWrap>
					</PriceAndButtonsWrap>
				</SellerListItem>
				<SellerListItem>
					<ImgWrap>
						<img src="/assets/main1.jpg" alt="" />
					</ImgWrap>
					<ItemInfoWrap>
						<ItemTitle>골드 코인 장식 스웨이드 페니로퍼</ItemTitle>
						<div>카테고리 : 슈즈</div>
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
								<input type="text" value="1" />
								<button>+</button>
							</div>
							<span>개</span>
						</StockWrap>
					</ItemInfoWrap>
					<PriceAndButtonsWrap>
						<div>45,500원</div>
						<ButtonsWrap>
							<Button>삭제</Button>
							<Button>저장</Button>
						</ButtonsWrap>
					</PriceAndButtonsWrap>
				</SellerListItem>
				<SellerListItem>
					<ImgWrap>
						<img src="/assets/main1.jpg" alt="" />
					</ImgWrap>
					<ItemInfoWrap>
						<ItemTitle>골드 코인 장식 스웨이드 페니로퍼</ItemTitle>
						<div>카테고리 : 슈즈</div>
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
								<input type="text" value="1" />
								<button>+</button>
							</div>
							<span>개</span>
						</StockWrap>
					</ItemInfoWrap>
					<PriceAndButtonsWrap>
						<div>45,500원</div>
						<ButtonsWrap>
							<Button>삭제</Button>
							<Button>저장</Button>
						</ButtonsWrap>
					</PriceAndButtonsWrap>
				</SellerListItem>
				<SellerListItem>
					<ImgWrap>
						<img src="/assets/main1.jpg" alt="" />
					</ImgWrap>
					<ItemInfoWrap>
						<ItemTitle>골드 코인 장식 스웨이드 페니로퍼</ItemTitle>
						<div>카테고리 : 슈즈</div>
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
								<input type="text" value="1" />
								<button>+</button>
							</div>
							<span>개</span>
						</StockWrap>
					</ItemInfoWrap>
					<PriceAndButtonsWrap>
						<div>45,500원</div>
						<ButtonsWrap>
							<Button>삭제</Button>
							<Button>저장</Button>
						</ButtonsWrap>
					</PriceAndButtonsWrap>
				</SellerListItem>
			</ul>
		</SellerListContainer>
	);
};

export default SellerList;
