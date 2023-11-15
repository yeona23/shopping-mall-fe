import {
	AddedItemWrap,
	CountAndPriceWrap,
	CountButton,
	Button,
} from './AddedItem.style';

const AddedItem = ({
	color,
	size,
	price,
	count,
	onIncrement,
	onDecrement,
	onRemove,
}) => {
	const formattedPrice = (price * count).toLocaleString();

	return (
		<AddedItemWrap>
			<div>
				<span>{color}</span>
				<span> / </span>
				<span>{size}</span>
			</div>
			<CountAndPriceWrap>
				<div>
					<CountButton onClick={onDecrement}>-</CountButton>
					<span>{count}</span>
					<CountButton onClick={onIncrement}>+</CountButton>
				</div>
				<div>
					<span>{formattedPrice}원</span>
					<Button onClick={onRemove}>X</Button>
				</div>
			</CountAndPriceWrap>
		</AddedItemWrap>
	);
};

export default AddedItem;
