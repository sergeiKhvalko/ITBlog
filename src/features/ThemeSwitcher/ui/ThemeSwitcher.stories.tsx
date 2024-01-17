import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/contexts'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
	title: 'features/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const ThemeSwitcherDark: Story = {
	args: {},
}

export const ThemeSwitcherLight: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
