import { cn } from '@/shared/lib/cn/cn'
import { NavbarProps } from './Navbar.props'
import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher/LangSwitcher'

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()

	return (
		<header className={cn(styles.navbar, [className])}>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</header>
	)
}
