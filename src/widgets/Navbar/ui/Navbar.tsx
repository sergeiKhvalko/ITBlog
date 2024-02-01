import { cn } from '@/shared/lib/cn/cn'
import { NavbarProps } from './Navbar.props'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher/LangSwitcher'
import { useCallback, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { LoginModal } from '@/features/AuthByUsername/ui/LoginModal/LoginModal'

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<header className={cn(styles.navbar, [className])}>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			<Button
				appearance={'outline'}
				className={styles.loginBtn}
				onClick={onShowModal}
			>
				{t('Log in')}
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</header>
	)
}
