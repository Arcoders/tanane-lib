import React from 'react';
import { Button } from 'tanane-lib-ui';
import usePagination from './hooks/usePagination';

export interface PaginationProps {
	totalPages: number; // Todo: rename prop
	currentPage: number;
	visiblePages: number;
	onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
	const { totalPages, currentPage, onPageChange, visiblePages } = props;
	const { page, handlePageChange, calculatePages } = usePagination({
		totalPages,
		currentPage,
		visiblePages,
		onPageChange,
	});

	const pages = calculatePages();

	return (
		<div className="pagination">
			<Button
				variant="text"
				color="secondary"
				size="small"
				onClick={() => handlePageChange(page - 1)}
				disabled={page === 1}
			>
				Previous
			</Button>
			{pages.map((pageNumber, index) => (
				<>
					{pageNumber < 0 ? <span key={index}>...</span> : (
						<Button
							variant="text"
							color={page === pageNumber ? 'primary' : 'secondary'}
							key={index}
							onClick={() => handlePageChange(pageNumber)}
						>
							{pageNumber}
						</Button>
					)}
				</>
			))}
			<Button
				variant="text"
				color="secondary"
				size="small"
				onClick={() => handlePageChange(page + 1)}
				disabled={page === totalPages}
			>
				Next
			</Button>
		</div>
	);
};

Pagination.displayName = "Pagination";

