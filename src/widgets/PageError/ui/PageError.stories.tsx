import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageError } from './PageError'
import { Theme } from '@/shared/contexts'
import { ThemeDecorator } from
	'@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'widget/ErrorPage',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageError>

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof PageError> = () => <PageError/>

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]