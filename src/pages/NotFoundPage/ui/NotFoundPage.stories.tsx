import { NotFoundPage } from './NotFoundPage'
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {},
}

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
