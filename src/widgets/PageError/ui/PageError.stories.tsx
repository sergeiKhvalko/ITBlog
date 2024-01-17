import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'widget/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
	args: {},
}

export const Light: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
