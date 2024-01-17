import { StateSchema } from '@/app/providers/StoreProvider'
import { DeepPartial } from '@/shared/types/deepPartial'
import { getCounterValue } from './getCounterValue'

describe('Counter value', () => {
	test('shold return counter value', () => {
		const state: DeepPartial<StateSchema> = {
			counter: { value: 10 },
		}
		expect(getCounterValue(state as StateSchema)).toEqual(10)
	})
})
