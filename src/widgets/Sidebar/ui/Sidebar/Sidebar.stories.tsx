import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'
import { Theme } from '@/shared/contexts'

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const SidebarDark: Story = {
	args: {},
}

export const SidebarLight: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
