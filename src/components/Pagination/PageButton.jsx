import React, { useState } from 'react';
import { PageBtn } from './Pagination.style';

const PageButton = () => {
	const PageCount = 5;
	const [selectedPage, setSelectedPage] = useState(1);

	const clickPageHandler = (pageNumber) => {
		if (selectedPage === pageNumber) {
			return;
		}
		setSelectedPage(pageNumber);
	};

	return (
		<PageBtn>
			{Array.from({ length: PageCount }, (_, index) => index + 1).map(
				(pageNumber) => (
					<div
						key={pageNumber}
						onClick={() => clickPageHandler(pageNumber)}
						style={{
							background:
								selectedPage === pageNumber
									? 'var(--color-palmoil)'
									: 'initial',
							color:
								selectedPage === pageNumber
									? 'var(--color-coconut)'
									: 'initial',
						}}>
						{pageNumber}
					</div>
				),
			)}
		</PageBtn>
	);
};

export default PageButton;
