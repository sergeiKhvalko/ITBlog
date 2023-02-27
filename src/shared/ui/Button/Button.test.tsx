import { render, screen } from '@testing-library/react'
import { Button } from '@/shared/ui/Button/Button'

describe('Test button', () => {
	test('test render', () => {
		render(<Button>TEST BUTTON</Button>)
		expect(screen.getByText('TEST BUTTON')).toBeInTheDocument()
	})

	test('clear theme', () => {
		render(<Button appearance='clear'>TEST BUTTON</Button>)
		expect(screen.getByText('TEST BUTTON')).toHaveClass('clear')
		screen.debug()
	})
})