import { Loader } from '@/shared/ui/Loader/Loader'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
	return (
		<Modal className={className} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader />}>
				<LoginForm onSuccess={onClose} />
			</Suspense>
		</Modal>
	)
}
