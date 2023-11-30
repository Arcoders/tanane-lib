import type { Meta, StoryObj } from '@storybook/react'

import { Button as ButtonComponent } from '../Button'

const meta = {
	title: 'Atoms/Button',
	component: ButtonComponent,
	tags: ['autodocs'],
	argTypes: {
		
	},
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {
	args: {
		children: 'Button',
		variant: 'contained',
		color: 'primary',
		size: 'medium'
	},
}