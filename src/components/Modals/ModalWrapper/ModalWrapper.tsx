import React, { FC } from 'react'
import './ModalWrapper.scss'

interface IModal {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const ModalWrapper: FC<IModal> = ({ isOpen, onClose, children }) => {
	return (
		<div
			className={isOpen ? 'modal__wrapper active' : 'modal__wrapper'}
			onPointerDown={() => onClose()}
		>
			<div
				className={isOpen ? 'modal__content active' : 'modal__content'}
				onPointerDown={e => e.stopPropagation()}
			>
				<button className='modal-close' onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	)
}

export default ModalWrapper
