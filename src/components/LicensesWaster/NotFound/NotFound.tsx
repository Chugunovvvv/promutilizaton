'use client'

import './NotFound.scss'
import ModalApplication from '@/components/Modals/ModalAplitcation/ModalApplication'
import MainButton from '@/components/UI/MainButton/MainButton'
import useModal from '@/hooks/useModal'
import React, { FC } from 'react'

const NotFound: FC = () => {
	const { isOpen, handleOpenModal, handleCloseModal } = useModal()
	return (
		<div className='notFound'>
			<span>
				Ничего не найдено. Проверьте правильность данных или оставьте заявку и
				мы с вами свяжемся
			</span>
			<MainButton
				text='Оставить заявку'
				className='button__applications'
				onClick={handleOpenModal}
			/>
			<ModalApplication isOpen={isOpen} onClose={handleCloseModal} />
		</div>
	)
}

export default NotFound
