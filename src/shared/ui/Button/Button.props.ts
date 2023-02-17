import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export enum ThemeButton {
	CLEAR = 'clear'
}
export interface ButtonProps extends 
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton
}