import { DEFALUT_OPTIONS } from './contants';
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
	defaultItemsPerPage,
	options = DEFALUT_OPTIONS
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

	if (totalItems === 0) return null;

	const pages = simple ? null : calculatePages();

	return (
		<div className={css.pagination}>
			{!simple && <ItemsPerPage
				options={options}
				itemsPerPage={itemsPerPage}
				handelOnItemsPerPage={handelOnItemsPerPage} />}

			<PaginationDefaultRender
				page={page}
				pages={pages}
				options={options}
				isNextDisabled={isNextDisabled}
				handlePageChange={handlePageChange}
				isPreviousDisabled={isPreviousDisabled} />
		</div>
	);
};

Pagination.displayName = "Pagination";

