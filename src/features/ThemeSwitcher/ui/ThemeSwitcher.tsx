import { Theme, useTheme } from '@/shared/contexts';
import { cn } from '@/shared/lib/cn/cn';
import styles from './ThemeSwitcher.module.scss';
import { ThemeSwitcherProps } from './ThemeSwitcher.props';
import LightIcon from '@/shared/assets/icons/sun.svg'
import DarkIcon from '@/shared/assets/icons/moon.svg'
import { Button } from '@/shared/ui/Button/Button';
import { ThemeButton } from '@/shared/ui/Button/Button.props';



export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={cn(styles.button, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{ theme === Theme.Dark ? <DarkIcon /> : <LightIcon /> }
		</Button>
	);
}