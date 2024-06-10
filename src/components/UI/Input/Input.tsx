import React, { FC } from 'react'
import './Input.scss'

interface IInput {
	placeholder: string
	className: string
	type: string
}

const Input: FC<IInput> = ({ placeholder, className, type }) => {
	return <input type={type} className={className} placeholder={placeholder} />
}

export default Input
