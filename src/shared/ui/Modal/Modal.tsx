import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '@/shared/ui/Portal/Portal'
import styles from './Modal.module.scss'
import { ModalProps } from './Modal.props'

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
	const {
		className,
		isOpen,
		onClose,
		children
	} = props

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const { theme } = useTheme()

	const closeHandler = useCallback(() => {
		if(onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if(e.key === 'Escape') {
			closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if(isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
		[styles[theme]]: true
	}

	return (
		<Portal>
			<div className={cn(styles.modal, [className], mods)}>
				<div className={styles.overlay} onClick={closeHandler}>
					<div className={styles.content} onClick={(e) => e.stopPropagation()}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}