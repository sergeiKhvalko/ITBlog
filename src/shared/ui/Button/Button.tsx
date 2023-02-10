import { cn } from '@/shared/lib/cn/cn';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';



export const Button = ({ children, className, theme, ...props}: ButtonProps) => {

	return (
		<button
			className={cn(styles.button, [className, styles[theme]])}
			{...props}
		>
			{children}
		</button>
 );
}