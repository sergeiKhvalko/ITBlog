import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from
	'@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Text',
	appearence: 'clear',
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	appearence: 'outline',
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
	children: 'Text',
	appearence: 'outline',
	size: 'l',
}

export const OutlineSizeXl = Template.bind({})
OutlineSizeXl.args = {
	children: 'Text',
	appearence: 'outline',
	size: 'xl',
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Text',
	appearance: 'outline',
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
	children: 'Text',
	appearance: 'background',
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
	children: 'Text',
	appearance: 'backgroundInverted',
}

export const Square = Template.bind({})
Square.args = {
	children: '-->',
	appearance: 'backgroundInverted',
	square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '-->',
	appearance: 'backgroundInverted',
	square: true,
	size: 'l',
}

export const SquareSizeXl = Template.bind({})
SquareSizeXl.args = {
	children: '-->',
	appearance: 'backgroundInverted',
	square: true,
	size: 'xl',
}