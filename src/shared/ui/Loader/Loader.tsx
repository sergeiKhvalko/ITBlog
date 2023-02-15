import { cn } from '@/shared/lib/cn/cn'
import styles from './Loader.module.scss'

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => {

	return (
		<div className={cn(styles.ldsDefault, [className], {})}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}