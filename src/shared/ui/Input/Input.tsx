import React, { memo, useEffect, useRef, useState } from 'react'
import { cn, Mods } from '@/shared/lib/cn/cn'
import styles from './Input.module.scss'
import { HStack } from '../Stack'
import { Text } from '../Text'
import { InputProps } from './Input.props'

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		addonLeft,
		addonRight,
		label,
		size = 'm',
		...otherProps
	} = props
	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true)
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}

	const mods: Mods = {
		[styles.readonly]: readonly,
		[styles.focused]: isFocused,
		[styles.withAddonLeft]: Boolean(addonLeft),
		[styles.withAddonRight]: Boolean(addonRight),
	}

	const input = (
		<div className={cn(styles.InputWrapper, [className, styles[size]], mods)}>
			<div className={styles.addonLeft}>{addonLeft}</div>
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={styles.input}
				onFocus={onFocus}
				onBlur={onBlur}
				readOnly={readonly}
				placeholder={placeholder}
				{...otherProps}
			/>
			<div className={styles.addonRight}>{addonRight}</div>
		</div>
	)

	if (label) {
		return (
			<HStack max gap="8">
				<Text text={label} />
				{input}
			</HStack>
		)
	}

	return input
})
