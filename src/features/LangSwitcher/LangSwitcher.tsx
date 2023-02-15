import { cn } from '@/shared/lib/cn/cn'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import Britain from '@/shared/assets/icons/Britain.svg'
import Russia from '@/shared/assets/icons/Russia.svg'
import { url } from 'inspector'

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'en-US' ? 'ru' : 'en-US')
		const html = document.documentElement
		html.lang = html.lang === 'en' ? 'ru' : 'en'
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