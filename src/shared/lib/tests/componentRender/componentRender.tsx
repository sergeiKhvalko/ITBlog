import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18nForTests from '@/shared/config/i18n/i18nForTests'
import { Theme, ThemeProvider } from '@/shared/contexts'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import '@/app/styles/index.scss'
import { DeepPartial } from '@/shared/types/deepPartial'

interface componentRenderOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
	theme?: Theme
}

interface TestProviderProps {
	children: ReactNode
	options?: componentRenderOptions
}
function TestProvider({ children, options = {} }: TestProviderProps) {
	const { route = '/', initialState, theme = Theme.DARK } = options

	return (
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState as StateSchema}>
				<I18nextProvider i18n={i18nForTests}>
					<ThemeProvider initialTheme={theme}>
						<div className={`app ${theme}`}>{children}</div>
					</ThemeProvider>
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	)
}

export function componentRender(
	component: ReactNode,
	options: componentRenderOptions = {},
) {
	return render(<TestProvider options={options}>{component}</TestProvider>)
}
