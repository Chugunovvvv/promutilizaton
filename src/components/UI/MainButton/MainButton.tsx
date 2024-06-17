import React, { FC } from 'react'
import './MainButton.scss'

interface IMainButton {
	text: string
	onClick?: () => void
	className: string
	width?: string
	disabled?: boolean
}

const MainButton: FC<IMainButton> = ({
	text,
	onClick,
	className,
	width,
	disabled,
}) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			style={{ width: `${width}` }}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default MainButton
