import type { Meta, StoryObj } from '@storybook/react'
import { Alert as AlertComponent } from '../Alert'

const meta = {
	title: 'Atoms/Alert',
	component: AlertComponent,
	tags: ['autodocs'],
	argTypes: {
		
	},
} satisfies Meta<typeof AlertComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Alert: Story = {
	args: {
		variant: 'danger',
		message: 'This is an alert message.'
	},
}