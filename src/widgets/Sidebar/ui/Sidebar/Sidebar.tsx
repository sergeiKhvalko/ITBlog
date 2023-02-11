import { cn } from '@/shared/lib/cn/cn';
import { Button } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useState } from 'react';
import styles from './Sidebar.module.scss';

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
			<Button onClick={onToogle}>toggle</Button>

		<div className={styles.switchers}>
			<ThemeSwitcher />
		</div>
			
		</div>
 );
}