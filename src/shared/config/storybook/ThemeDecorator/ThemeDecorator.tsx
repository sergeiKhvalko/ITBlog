import { Theme, ThemeProvider } from '@/shared/contexts'
import { Story } from '@storybook/react'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
	<ThemeProvider initialTheme={theme}>
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	</ThemeProvider>
)
