import { cn } from "@/shared/lib/cn/cn"
import { NavbarProps } from "./Navbar.props"
import styles from './Navbar.module.scss'
import { AppLink } from "@/shared/ui/AppLink/AppLink"
import { AppLinkTheme } from "@/shared/ui/AppLink/AppLink.props"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={cn(styles.navbar, [className])}>
			<ThemeSwitcher />
			<div className={styles.links}>
				<AppLink to={'/'}>MainPage</AppLink>
				<AppLink to={'/about'}>AboutPage</AppLink>
			</div>
		</div>
	)
}
