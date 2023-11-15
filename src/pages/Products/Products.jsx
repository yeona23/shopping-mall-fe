import Outer from '../../components/Category/Outer/Outer';
import PaginationBar from '../../components/Pagination/PaginationBar';
import { ProductContainer, Title } from './Products.style';

const Products = () => {
	return (
		<div>
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
		</div>
	);
};

export default Products;
