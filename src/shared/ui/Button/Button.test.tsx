import { render, screen } from '@testing-library/react'
import { Button } from '@/shared/ui/Button/Button'
import { ThemeButton } from './Button.props'

describe('Test button', () => {
	test('test render', () => {
		render(<Button>TEST BUTTON</Button>)
		expect(screen.getByText('TEST BUTTON')).toBeInTheDocument()
	})

	test('clear theme', () => {
		render(<Button theme={ThemeButton.CLEAR}>TEST BUTTON</Button>)
		expect(screen.getByText('TEST BUTTON')).toHaveClass('clear')
		screen.debug()
	})
})