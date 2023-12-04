import type { Meta, StoryObj } from '@storybook/react'
import { Table as TableComponent } from '../Table'

const meta = {
	title: 'Atoms/Table',
	component: TableComponent,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof TableComponent>

const stockItems: StockItem[] = [
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
	},
	{
		id: 3,
		name: 'image 3',
		image: {
			url: 'https://picsum.photos/200',
			width: 100,
			height: 50,
		},
	},
]

interface StockItem {
	id: number
	name: string
	image: {
		url: string
		width: number
		height: number
	}
}


const tableProps = {
	headers: {
		id: 'ID',
		image: 'Image',
		name: 'Name',
	},
	items: stockItems,
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

export default meta
type Story = StoryObj<typeof meta>

export const Table: Story = {
	args: {
		...tableProps
	},
}
