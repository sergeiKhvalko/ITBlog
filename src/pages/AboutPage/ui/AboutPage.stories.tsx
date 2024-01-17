import AboutPage from './AboutPage'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const AboutDark: Story = {
	args: {},
}

export const AboutLight: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
