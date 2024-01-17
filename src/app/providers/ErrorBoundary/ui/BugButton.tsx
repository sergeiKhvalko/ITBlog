import { Button } from '@/shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'



export const BugButton = () => {
	const [error, setError] = useState(false)

	const { t } = useTranslation()

	useEffect(() => {
		if(error) {
			throw new Error()
		}
	}, [error])

	const onError = () => {
		setError(true)
	}

	return (
		<div>
			<Button onClick={onError}>{t('trigger an error')}</Button>
		</div>
	)
}