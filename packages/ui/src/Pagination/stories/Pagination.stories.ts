import type { Meta, StoryObj } from '@storybook/react'

import { Pagination as PaginationComponent } from '../Pagination'

const meta = {
	title: 'Atoms/Pagination',
	component: PaginationComponent,
	tags: ['autodocs'],
	argTypes: {
		
	},
} satisfies Meta<typeof PaginationComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Pagination: Story = {
	args: {
		defaultItemsPerPage: 10,
		totalItems: 50,
		visiblePages: 3,
		currentPage: 1,
		onPageChange: (page) => console.log(page)
	},
}

export const Simple: Story = {
	args: {
		defaultItemsPerPage: 10,
		totalItems: 50,
		simple: true,
		onPageChange: (page) => console.log(page)
	},
}