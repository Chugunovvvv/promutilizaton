import React, { FC } from 'react'
import './Input.scss'

interface IInput {
	placeholder: string
	className: string
	type?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	required?: boolean
	name?: string
	showUnit?: boolean
}

const Input: FC<IInput> = ({
	placeholder,
	className,
	type = 'text',
	onChange,
	value,
	required,
	name,
	showUnit,
}) => {
	return (
		<div className={`input-wrapper ${showUnit ? 'with-unit' : ''}`}>
			<input
				required={required}
				type={type}
				className={className}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				name={name}
			/>
			{showUnit && <span className='unit'>T</span>}
		</div>
	)
}

export default Input
