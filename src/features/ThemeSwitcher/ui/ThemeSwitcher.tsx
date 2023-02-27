import { Theme, useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { ThemeSwitcherProps } from './ThemeSwitcher.props'
import LightIcon from '@/shared/assets/icons/sun.svg'
import DarkIcon from '@/shared/assets/icons/moon.svg'
import { Button } from '@/shared/ui/Button/Button'



export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			className={cn('', [className])}
			onClick={toggleTheme}
			appearance='clear'
		>
			{ theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
		</Button>
	)
}