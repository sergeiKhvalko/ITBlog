import MainPage from './MainPage'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) =>
	<MainPage {...Object.assign({}, args)} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]