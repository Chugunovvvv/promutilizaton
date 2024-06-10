import React, { FC } from 'react'
import './MainButton.scss'

interface IMainButton {
	text: string
	onClick?: () => void
	className: string
	width?: string
}

const MainButton: FC<IMainButton> = ({ text, onClick, className, width }) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			style={{ width: `${width}` }}
		>
			{text}
		</button>
	)
}

export default MainButton
