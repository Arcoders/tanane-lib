import { useState, useEffect } from 'react';

type PageChange = { currentPage: number, itemsPerPage: number, offset: number }
type Options = {
  previous: string | JSX.Element,
  next: string | JSX.Element
  displayText: string,
  itemsText: string
}
export interface PaginationProps {
  simple?: boolean;
  options?: Options;
  totalItems: number;
  currentPage?: number;
  visiblePages?: number;
  defaultItemsPerPage: number;
  onPageChange: (page: PageChange) => void;
}

const DEFAULT_ITEMS_PER_PAGE = 10;

export const usePagination = ({
  totalItems,
  currentPage = 1,
  visiblePages = 3,
  onPageChange,
  defaultItemsPerPage
}: PaginationProps) => {
  const [page, setPage] = useState(currentPage);
  const [itemsPerPage, setItemsPerPage] = useState<number>(DEFAULT_ITEMS_PER_PAGE);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    defaultItemsPerPage && setItemsPerPage(defaultItemsPerPage);
  }, [defaultItemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    onPageChange({ currentPage: pageNumber, itemsPerPage, offset: pageNumber * itemsPerPage });
  };

  const handelOnItemsPerPage = (itemsNumber: number) => {
    setItemsPerPage(itemsNumber);
    onPageChange({ currentPage: page, itemsPerPage: itemsNumber, offset: (page - 1) * itemsPerPage });
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const calculatePages = () => {
    const pages: number[] = [];
    const halfVisiblePages = Math.floor(visiblePages / 2);

    if (totalPages <= visiblePages) return Array.from({ length: totalPages }, (_, i) => i + 1);

    let startPage = Math.max(1, page - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (startPage === 1) {
      endPage = visiblePages;
    } else if (endPage === totalPages) {
      startPage = totalPages - visiblePages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift(-1);
      pages.unshift(1);
    }

    if (endPage < totalPages) {
      pages.push(-2);
      pages.push(totalPages);
    }

    return pages;
  };

  const isNextDisabled = page === 1;
  const isPreviousDisabled = page === totalPages;

  return {
    page,
    itemsPerPage,
    isNextDisabled,
    calculatePages,
    handlePageChange,
    isPreviousDisabled,
    handelOnItemsPerPage
  };
};

export default usePagination;