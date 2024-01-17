import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '@/shared/ui/Modal/Modal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/contexts/theme-context/ThemeContext'

const meta = {
	title: 'shared/Modal',
	component: Modal,
	// parameters: {
	// 	layout: 'centered',
	// },
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalDark: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ut.\n ',
	},
}

export const ModalLight: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, ut.\n ',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)],
}
