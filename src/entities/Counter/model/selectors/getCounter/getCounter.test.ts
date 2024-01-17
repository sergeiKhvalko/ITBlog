import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/deepPartial'
import { getCounter } from './getCounter'

describe('Counter', () => {
	test('shold return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		}
		expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
	})
})
