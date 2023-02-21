import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline'
}
export interface ButtonProps extends 
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton
}