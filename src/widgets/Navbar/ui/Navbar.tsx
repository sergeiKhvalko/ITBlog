import { cn } from "@/shared/lib/cn/cn"
import { NavbarProps } from "./Navbar.props"
import styles from './Navbar.module.scss'
import { AppLink } from "@/shared/ui/AppLink/AppLink"

export const Navbar = ({className}: NavbarProps) => {
	return (
		<header className={cn(styles.navbar, [className])}>
			<nav className={styles.links}>
				<AppLink to={'/'}>MainPage</AppLink>
				<AppLink to={'/about'}>AboutPage</AppLink>
			</nav>
		</header>
	)
}
