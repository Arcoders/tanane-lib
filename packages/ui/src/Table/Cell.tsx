import { ReactNode } from "react";

interface CellProps<T> {
    item: T;
    property: keyof T;
    renders?: Partial<Record<keyof T, (item: T) => JSX.Element>>;
}

export default function Cell<T>({ item, property, renders }: CellProps<T>): JSX.Element {
    const render = renders?.[property];

    if (render) return <td>{render(item)}</td>;
    
    return <td>{ item[property] as ReactNode}</td>;
}