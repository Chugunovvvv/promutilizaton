import React, { FC } from 'react'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import { IModal } from '@/types'
import './ModalSucsess.scss'

const ModalSucsess: FC<IModal> = ({ isOpen, onClose }) => {
	return (
		<ModalWrapper isOpen={isOpen} onClose={onClose}>
			<div className='modalSuccsess'>
				<h2>Заявка отправлена</h2>
				<span>Спасибо за обращение, свяжемся с вами в ближайшее время</span>
			</div>
		</ModalWrapper>
	)
}

export default ModalSucsess
