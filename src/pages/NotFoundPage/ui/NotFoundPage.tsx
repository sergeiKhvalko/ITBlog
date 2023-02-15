import { cn } from '@/shared/lib/cn/cn'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.notFoundPage}>
			{t('Page not found')}
		</div>
	)
}