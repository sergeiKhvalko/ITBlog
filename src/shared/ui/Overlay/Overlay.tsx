import { cn } from '@/shared/lib/cn/cn'
import { memo } from 'react'
import styles from './Overlay.module.scss'
import { OverlayProps } from './Overlay.props'

export const Overlay = memo(({ className, onClose }: OverlayProps) => {
	return (
		<div className={cn(styles.Overlay, [className])} onClick={onClose}></div>
	)
})
