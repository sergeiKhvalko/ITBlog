import { Theme } from '@/shared/contexts'
import { Story } from '@storybook/react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
)
