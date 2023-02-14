import { cn } from '@/shared/lib/cn/cn'
import { NavbarProps } from './Navbar.props'
import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	return (
		<header className={cn(styles.navbar, [className])}>
			<nav className={styles.links}>
				<AppLink to={'/'}>{t('Main')}</AppLink>
				<AppLink to={'/about'}>{t('About')}</AppLink>
			</nav>
		</header>
	)
}
