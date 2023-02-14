import { cn } from '@/shared/lib/cn/cn'
import { Link } from 'react-router-dom'
import styles from './AppLink.module.scss'
import { AppLinkProps, AppLinkTheme } from './AppLink.props'


export const AppLink = ({
	to, className, children,
	theme = AppLinkTheme.PRIMARY, ...props
}: AppLinkProps) => {

	return (
		<Link
			to={to}
			className={cn(styles.appLink, [className, styles[theme]], {})}
			{...props}
		>
			{ children }
		</Link>
	)
}