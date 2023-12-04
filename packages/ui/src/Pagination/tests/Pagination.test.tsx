import React from 'react';
import '@testing-library/jest-dom';
import { describe, test, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '..';

describe('Pagination component', () => {
  const mockOnPageChange = vi.fn();
  const currentPage = 5;

  const paginationProps = {
    currentPage,
    totalItems: 50,
    visiblePages: 5,
    defaultItemsPerPage: 5,
    onPageChange: mockOnPageChange,
  };

  test('Renders pagination buttons', () => {
    render(<Pagination {...paginationProps} />);

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');
    const pageButtons = screen.getAllByRole('button', { name: /[0-9]+/ });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageButtons.length).toBeGreaterThan(0);
  });

  test('Disables navigation buttons appropriately', () => {
    render(<Pagination {...paginationProps} />);

    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(previousButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(currentPage - 1);

    fireEvent.click(nextButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(currentPage);
  });

  test('Highlights active page correctly', () => {
    render(<Pagination {...paginationProps} />);
    const firstPageButton = screen.getByRole('button', { name: '1' });
    expect(firstPageButton.className).toContain('btn__secondary');

    const activePageButton = screen.getByRole('button', { name: currentPage.toString() });
    expect(activePageButton.className).toContain('btn__primary');
  });

  test('Handles page change correctly', () => {
    render(<Pagination {...paginationProps} />);

    const pageButton = screen.getByRole('button', { name: '6' });
    fireEvent.click(pageButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  });
});
