import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {},
}

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
