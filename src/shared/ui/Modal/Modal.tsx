// import { useTheme } from '@/shared/contexts'
import { cn } from '@/shared/lib/cn/cn'
import { Portal } from '@/shared/ui/Portal/Portal'
import styles from './Modal.module.scss'
import { ModalProps } from './Modal.props'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
	const { className, isOpen, onClose, children, lazy } = props

	const { isClosing, isMounted, close } = useModal({
		isOpen,
		animationDelay: ANIMATION_DELAY,
		onClose,
	})

	const mods: Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing,
	}

	if (lazy && !isMounted) {
		return null
	}

	return (
		<Portal element={document.getElementById('app') ?? document.body}>
			<div className={cn(styles.modal, [className], mods)}>
				<Overlay onClose={close} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	)
}
