import type { Meta, StoryObj } from '@storybook/react'

import { AppLink } from './AppLink'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../contexts'
import { AppLinkTheme } from './AppLink.props'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
		children: 'link text',
	},
}
export const Secondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
		children: 'link text',
	},
}
export const Red: Story = {
	args: {
		theme: AppLinkTheme.RED,
		children: 'link text',
	},
}
// export const Active: Story = {
// 	args: {
// 		activeClassName: 'isActive',
// 		children: 'link text',
// 	},
// }

export const PrimaryLight: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
		children: 'link text',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const SecondaryLight: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
		children: 'link text',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
export const RedLight: Story = {
	args: {
		theme: AppLinkTheme.RED,
		children: 'link text',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
// export const ActiveLight: Story = {
// 	args: {
// 		activeClassName: 'isActive',
// 		children: 'link text',
// 	},
// 	decorators: [ThemeDecorator(Theme.LIGHT)],
// }
