import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@/shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}
	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	return (
		<div>
			<h1 data-testid="value-title">value = {counterValue}</h1>

			<Button
				data-testid="increment-btn"
				appearance="outline"
				onClick={increment}
			>
				increment
			</Button>
			<Button
				data-testid="decrement-btn"
				appearance="outline"
				onClick={decrement}
			>
				decrement
			</Button>
		</div>
	)
}
