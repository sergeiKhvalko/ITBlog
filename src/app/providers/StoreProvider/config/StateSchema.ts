import { CounterSchema } from '@/entities/Counter'
import { UserSchema } from '@/entities/User/model/types/user'
import { LoginSchema } from '@/features/AuthByUsername'
import { rtkApi } from '@/shared/api/rtkApi'
import { AxiosInstance } from 'axios'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
	loginForm?: LoginSchema
}

export interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
