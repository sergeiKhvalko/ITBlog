import { cn } from './cn'

describe('classNames', () => {
	test('with only first param', () => {
		expect(cn('someClass')).toBe('someClass')
	})

	test('with additional class', () => {
		expect(cn('someClass', ['class1', 'class2']))
			.toBe('someClass class1 class2')
	})

	test('with mods class', () => {
		expect(cn(
			'someClass',
			['class1', 'class2'],
			{ hovered: true, active: true }
		))
			.toBe('someClass class1 class2 hovered active')
	})

	test('with mods class false', () => {
		expect(cn(
			'someClass',
			['class1', 'class2'],
			{ hovered: true, active: false }
		))
			.toBe('someClass class1 class2 hovered')
	})

	test('with mods class undefined', () => {
		expect(cn(
			'someClass',
			['class1', 'class2'],
			{ hovered: undefined, active: true }
		))
			.toBe('someClass class1 class2 active')
	})

	
})