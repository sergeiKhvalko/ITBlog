import { cn } from '@/shared/lib/cn/cn'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
// import Britain from '@/shared/assets/icons/Britain.svg'
// import Russia from '@/shared/assets/icons/Russia.svg'
// import { url } from 'inspector'
import { ChangeEvent } from 'react'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation()

	const toggle = (e: ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value)
		document.documentElement.lang = e.target.value
	}

	return (
		<select
			className={cn(styles.langSwitcher, [className], {})}
			defaultValue={'en'}
			onChange={toggle}
		>
			<option value="en">en</option>
			<option value="ru">ru</option>
		</select>
	)
}
