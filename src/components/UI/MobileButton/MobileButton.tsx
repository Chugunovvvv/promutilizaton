import React, { FC } from 'react'
import './MobileButton.scss'

interface IMobileButton {
	onClick: () => void
	active: boolean
}

const MobileButton: FC<IMobileButton> = ({ onClick, active }) => {
	return (
		<div
			className={active ? 'mobileButton active' : 'mobileButton'}
			onClick={onClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}

export default MobileButton
