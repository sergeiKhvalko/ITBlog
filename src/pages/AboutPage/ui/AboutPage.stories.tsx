import AboutPage from './AboutPage'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) =>
	<AboutPage {...Object.assign({}, args)} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]