import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/contexts'
import { Loader } from './Loader'

const meta = {
	title: 'shared/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {},
}

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
