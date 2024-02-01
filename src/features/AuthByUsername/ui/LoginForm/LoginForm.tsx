import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginFormProps } from './LoginForm.props'
import styles from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { cn } from '@/shared/lib/cn/cn'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

export const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const username = useSelector(getLoginUsername)
	const password = useSelector(getLoginPassword)
	const isLoading = useSelector(getLoginIsLoading)
	const error = useSelector(getLoginError)

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch],
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch],
	)

	const onLoginClick = useCallback(async () => {
		console.log('login')

		//const result = await dispatch(loginByUsername({ username, password }))
		// if (result.meta.requestStatus === 'fulfilled') {
		// 	onSuccess()
		// }
	}, [dispatch, username, password, onSuccess])

	return (
		<VStack gap="16" className={cn(styles.loginForm, [className])}>
			<Text title={t('Auth form')} />
			{error && (
				<Text text={t('Uncorrect username or password')} variant={'error'} />
			)}

			<Input
				autoFocus
				className={styles.input}
				placeholder={t('Enter username')}
				onChange={onChangeUsername}
				value={username}
			/>
			<Input
				className={styles.input}
				placeholder={t('Enter password')}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				className={styles.loginBtn}
				appearance={'outline'}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Log in')}
			</Button>
		</VStack>
	)
})
