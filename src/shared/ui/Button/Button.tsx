import { cn } from '@/shared/lib/cn/cn'
import styles from './Button.module.scss'
import { ButtonProps } from './Button.props'



export const Button = (
	{ children, className, appearance, square, size = 'm', ...props }: ButtonProps
) => {

	const mods: Record<string, boolean> = {
		[styles[appearance]]: true,
		[styles.square]: square,
		[styles[size]]: true,
	}

	return (
		<button
			type='button'
			className={cn(styles.button, [className], mods)}
			{...props}
		>
			{children}
		</button>
	)
}