import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from '..'; 

describe('Table component', () => {
  const sampleData: { id: number; name: string; age: number }[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ];

  const headers = { id: 'ID', name: 'Name', age: 'Age' };

  test('Should renders table headers correctly', () => {
    render(<Table items={[]} headers={headers} />);
    
    Object.values(headers).forEach((headerValue) => {
      expect(screen.getByText(headerValue)).toBeInTheDocument();
    });
  });

  test('Should renders rows with data', () => {
    render(<Table items={sampleData} headers={headers} />);
    
    sampleData.forEach((item) => {
      expect(screen.getByText(item.id.toString())).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.age.toString())).toBeInTheDocument();
    });
  });

  test('Allows row selection', () => {
    render(<Table items={sampleData} headers={headers} />);
    const firstRowCheckbox = screen.getByTestId('checkbox-0');
    
    expect(firstRowCheckbox).toBeInTheDocument();
    expect(firstRowCheckbox).not.toBeChecked();

    userEvent.click(firstRowCheckbox);
    expect(firstRowCheckbox).toBeChecked();
  });

});

