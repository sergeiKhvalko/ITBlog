import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		appearance: 'background',
		children: 'Button',
	},
}

export const BackgroundInverted: Story = {
	args: {
		children: 'Button',
		appearance: 'backgroundInverted',
	},
}

export const Clear: Story = {
	args: {
		appearance: 'clear',
		children: 'Button',
	},
}

export const Outline: Story = {
	args: {
		appearance: 'outline',
		children: 'Button',
	},
}

export const OutlineSizeM: Story = {
	args: {
		appearance: 'outline',
		size: 'm',
		children: 'Button',
	},
}

export const OutlineSizeL: Story = {
	args: {
		appearance: 'outline',
		size: 'l',
		children: 'Button',
	},
}

export const OutlineSizeXl: Story = {
	args: {
		appearance: 'outline',
		size: 'xl',
		children: 'Button',
	},
}
export const OutlineDark: Story = {
	args: {
		appearance: 'outline',
		children: 'Button',
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const Square: Story = {
	args: {
		appearance: 'backgroundInverted',
		square: true,
		children: '-->',
	},
}

export const SquareSizeL: Story = {
	args: {
		appearance: 'backgroundInverted',
		square: true,
		size: 'l',
		children: '-->',
	},
}

export const SquareSizeXl: Story = {
	args: {
		appearance: 'backgroundInverted',
		square: true,
		size: 'xl',
		children: '-->',
	},
}
