import MainPage from './MainPage'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const MainDark: Story = {
	args: {},
}

export const MainLight: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
