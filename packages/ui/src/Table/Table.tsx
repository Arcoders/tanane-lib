import { ReactNode, useState } from "react";
import classnames from "../utils/classnames";
import Cell from './Cell'
import css from './Styles.module.scss'

export interface TableProps<T> {
  headers: Record<keyof T, string>;
  items: T[];
  renders?: Partial<Record<keyof T, (item: T) => JSX.Element>>;
}

export function Table<T>({ items, headers, renders }: TableProps<T>): JSX.Element {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleRowSelect = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === items.length) {
      setSelectedRows([]);
    } else {
      const allIndices = Array.from({ length: items.length }, (_, i) => i);
      setSelectedRows(allIndices);
    }
  };

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={selectedRows.length === items.length}
              onChange={handleSelectAll}
            />
          </th>
          {Object.values(headers).map((headerValue, index) => (
            <th key={index}>{headerValue as ReactNode}</th>
          ))}
        </tr>
      </thead>
      <tbody>{items.map((item, rowIndex) => (
        <tr key={rowIndex} className={classnames({ [css.selected]: selectedRows.includes(rowIndex) })}>
          <td>
            <input
              type="checkbox"
              checked={selectedRows.includes(rowIndex)}
              onChange={() => handleRowSelect(rowIndex)}
              data-testid={`checkbox-${rowIndex}`}
            />
          </td>
          {Object.keys(headers).map((property, cellIndex) => (
            <Cell key={`${rowIndex}-${cellIndex}`} item={item} property={property as keyof T} renders={renders} />
          ))}
        </tr>
      ))}</tbody>
    </table>
  );
}

Table.displayName = "Table";
