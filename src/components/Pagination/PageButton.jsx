import React from 'react';
import { PageBtn } from './Pagination.style';

const PageButton = ({ currentPage, totalPages, onPageChange }) => {
	const PageCount = totalPages;

	const clickPageHandler = (pageNumber) => {
		if (currentPage === pageNumber) {
			return;
		}
		onPageChange(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const generatePageButton = () => {
		const buttons = [];
		const startPage = Math.max(1, currentPage - Math.floor(PageCount / 2));
		const endPage = Math.min(totalPages, startPage + PageCount - 1);

		for (let i = startPage; i <= endPage; i++) {
			buttons.push(
				<div
					key={i}
					onClick={() => clickPageHandler(i)}
					style={{
						background: currentPage === i ? 'var(--color-palmoil)' : 'initial',
						color: currentPage === i ? 'var(--color-coconut)' : 'initial',
					}}>
					{i}
				</div>,
			);
		}
		return buttons;
	};

	return <PageBtn>{generatePageButton()}</PageBtn>;
};

export default PageButton;
