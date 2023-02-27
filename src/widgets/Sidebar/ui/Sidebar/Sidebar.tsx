import { cn } from '@/shared/lib/cn/cn'
import { Button } from '@/shared/ui/Button/Button'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { LangSwitcher } from '@/features/LangSwitcher/LangSwitcher'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '@/shared/router/AppRoutes'
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink.props'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation()

	const onToogle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			data-testid='sidebar'
			className={cn(styles.sidebar, [className], {
				[styles.collapsed]: collapsed
			})}
		>
			<Button
				data-testid='sidebar-toggle'
				className={styles.sidebarBtn}
				onClick={onToogle}
			>
				{collapsed ? '-->' : '<--'}
			</Button>

			<nav className={styles.items}>
				<AppLink
					to={RoutePath.main}
					theme={AppLinkTheme.PRIMARY}
					className={styles.item}
				>
					<MainIcon className={styles.icon} />
					<span className={styles.link}>{t('Main')}</span>
				</AppLink>
				<AppLink
					to={RoutePath.about}
					theme={AppLinkTheme.PRIMARY}
					className={styles.item}
				>
					<AboutIcon className={styles.icon} />
					<span className={styles.link}>{t('About')}</span>
				</AppLink>
			</nav>

			
			
		</div>
	)
}