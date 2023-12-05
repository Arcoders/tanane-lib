import { usePagination, type PaginationProps } from './hooks/usePagination';
import ItemsPerPage from './ItemsPerPage';
import PaginationDefaultRender from './PaginationDefaultRender';

import css from './Styles.module.scss'

export const Pagination: React.FC<PaginationProps> = ({
	simple,
	totalItems,
	currentPage,
	onPageChange,
	visiblePages,
	defaultItemsPerPage
}) => {
	const {
		page,
		itemsPerPage,
		calculatePages,
		isNextDisabled,
		handlePageChange,
		isPreviousDisabled,
		handelOnItemsPerPage,
	} = usePagination({
		totalItems,
		currentPage,
		visiblePages,
		onPageChange,
		defaultItemsPerPage
	});

	const pages = simple ? null : calculatePages();

	return (
		<div className={css.pagination}>
			{!simple && <ItemsPerPage 
				itemsPerPage={itemsPerPage} 
				handelOnItemsPerPage={handelOnItemsPerPage} />}

			<PaginationDefaultRender
				page={page}
				pages={pages}
				isNextDisabled={isNextDisabled}
				handlePageChange={handlePageChange}
				isPreviousDisabled={isPreviousDisabled} />
		</div>
	);
};

Pagination.displayName = "Pagination";

