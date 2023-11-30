import { useState, useEffect } from 'react';

interface PaginationHookProps {
  totalPages: number;
  currentPage: number;
  visiblePages: number;
  onPageChange: (page: number) => void;
}

const usePagination = ({
  totalPages,
  currentPage,
  visiblePages,
  onPageChange,
}: PaginationHookProps) => {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    onPageChange(pageNumber);
  };

  const calculatePages = () => {
    const pages = [];
    const halfVisiblePages = Math.floor(visiblePages / 2);

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
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
    }

    return pages;
  };


  return { page, handlePageChange, calculatePages };
};

export default usePagination;