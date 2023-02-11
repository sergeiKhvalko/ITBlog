import { cn } from '@/shared/lib/cn/cn';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { LangSwitcher } from '@/features/LangSwitcher/LangSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToogle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			className={cn(styles.sidebar, [className], {[styles.collapsed]: collapsed})}
		>
			<Button
				className={styles.sidebarBtn}
				onClick={onToogle}
			>
				{'<--'}
			</Button>

			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			
		</div>
	);
}