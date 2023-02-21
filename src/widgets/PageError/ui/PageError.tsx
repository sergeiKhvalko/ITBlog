import { Button } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import styles from './PageError.module.scss'



export const PageError = () => {
	const { t } = useTranslation()

	const reloadPage = () => {
		window.location.reload()
	}

	return (
		<div className={styles.pageError}>
			<h1>{t('Something went wrong')}</h1>
			<Button onClick={reloadPage}>{t('Reload page')}</Button>
		</div>
	)
}