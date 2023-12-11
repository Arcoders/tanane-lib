# Table

Table Component
The Table component displays tabular data with customizable rendering options for individual cells.

## Usage

Import the Table component in your React application:

```javascript
import { Table} from 'tanane-lib-ui';

// Use the Table like this:

interface StockItem {
	id: number;
	name: string;
	image: {
		url: string;
		width: number;
		height: number;
	};
}

const items: StockItem[] = [
	{
		id: 1,
		name: 'image 1',
		image: {
			url: 'https://picsum.photos/200',
			width: 100,
			height: 50,
		},
	},
	{
		id: 2,
		name: 'image 2',
		image: {
			url: 'https://picsum.photos/200',
			width: 100,
			height: 50,
		},
	}
]

const tableProps = {
	headers: {
		id: 'ID',
		image: 'Image',
		name: 'Name',
	},
	items,
	renders: {
		image: (item: StockItem) => (
			<img
				alt={`${item.name}`}
				height={item.image.height}
				src={item.image.url}
				width={item.image.width}
			/>
		),
	},
}

<Table {...tableProps} />
```

---

## Props

The Table component accepts the following props:

`headers`: Record<keyof T, string> - An object defining the table headers.

`items`: T[] - An array of objects representing the table rows.

`renders`: Partial<Record<keyof T, (item: T) => JSX.Element>> (Optional) - Partial functions to render custom cells for specific properties.

| Prop          | Type                                                            | Description                                                                   |
|---------------|-----------------------------------------------------------------|-------------------------------------------------------------------------------|
| `headers`     | `Record<keyof T, string>`                                       | Defines the table headers                                                      |
| `items`       | `T[]`                                                           | Array of objects representing table rows                                        |
| `renders`     | `Partial<Record<keyof T, (item: T) => JSX.Element>>`            | Partial functions to render custom cells for specific properties               |
