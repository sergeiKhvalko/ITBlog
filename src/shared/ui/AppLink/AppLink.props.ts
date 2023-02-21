import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}
export interface AppLinkProps extends LinkProps {
	className?: string
	children: ReactNode
	theme?: AppLinkTheme
}