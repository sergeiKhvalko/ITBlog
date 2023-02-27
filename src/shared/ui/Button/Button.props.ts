import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'


export interface ButtonProps extends 
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	appearance?: 'clear' | 'outline' | 'background' | 'backgroundInverted';
	square?: boolean;
	size?: 'm' | 'l' | 'xl';
}