import React, { useCallback, type ChangeEvent } from 'react'

import classNames from 'classnames/bind'
import type { InputProps } from './Input.types'
import css from './Input.scss'

const cn = classNames.bind(css)

const Input = ({
	value,
	name,
	onChange,
	onIconClick,
	label,
	placeholder = 'Введите текст',
}: InputProps) => {
	const handler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			onChange(e.target.value)
		},
		[onChange]
	)

	return (
		<fieldset className={cn('input')}>
			{label && <label className={cn('input__label')}>{label}</label>}
			<div className="input__wrap">
				<input
					className={cn('input__field')}
					name={name}
					value={value}
					onChange={handler}
					placeholder={placeholder}
				/>
				{value && (
					<button
						className={cn('input__clear')}
						onClick={onIconClick}
					></button>
				)}
			</div>
		</fieldset>
	)
}

export { Input, type InputProps }
