import { ReactNode } from 'react'
import ReactDom from 'react-dom'

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
	const {
		children,
		element = document.body,
	} = props

	return ReactDom.createPortal(children, element)
}