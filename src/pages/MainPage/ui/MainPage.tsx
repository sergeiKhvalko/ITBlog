import { BugButton } from '@/app/provider/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
	const { t } = useTranslation('main')

	return (
		<div>
			{t('MainPage')}
			<BugButton />
		</div>
	)
}

export default MainPage