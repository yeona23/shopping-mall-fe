import { BsArrowDownUp, BsPlus } from 'react-icons/bs';
import Outer from '../../components/Category/Outer/Outer';
import { ProductContainer, Title } from './Products.style';
import PaginationBar from '../../components/Category/Pagination/PaginationBar';

const Products = () => {
	return (
		<ProductContainer>
			<div>
				<Title>
					<p>HOME &nbsp;&gt;&nbsp; </p>
					<h2>OUTER</h2>
				</Title>
				<PaginationBar />
				<Outer />
			</div>
		</ProductContainer>
	);
};

export default Products;
