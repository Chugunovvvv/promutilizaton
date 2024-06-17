'use client'

import React, { FC, useState } from 'react'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import Input from '@/components/UI/Input/Input'
import InputAgree from '@/components/UI/InputAgree/InputAgree'
import { ILicenses } from '@/utils/licenses'
import './ModalWithWaste.scss'
import MainButton from '@/components/UI/MainButton/MainButton'
import useForm from '@/hooks/useForm'
import { IInitialState } from '@/types'
import ModalSucsess from '../ModalSucsess/ModalSucsess'

interface IModalWithWaste {
	isOpen: boolean
	onClose: () => void
	selectedWaste: ILicenses[]
}

const initialState: IInitialState = {
	name: '',
	phone: '',
	checked: true,
	quantity: '',
}

const ModalWithWaste: FC<IModalWithWaste> = ({
	isOpen,
	onClose,
	selectedWaste,
}) => {
	const { formData, handleChange, resetForm } = useForm({
		initialState,
	})
	const [isActive, setIsActive] = useState<boolean>(false)
	const handleActiveModal = () => {
		setIsActive(false)
		onClose()
	}
	const validateForm = () => {
		const { name, phone, checked } = formData
		if (!name || !phone || !checked) {
			return false
		}
		return true
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (validateForm()) {
			setIsActive(true)
		}
		resetForm()

		console.log(formData)
	}
	return (
		<>
			<ModalWrapper isOpen={isOpen} onClose={onClose}>
				<form className='modalWithWaste' onSubmit={onSubmit}>
					<h2>Оставьте контактные данные и выберите количество отходов</h2>
					<div className='modalWithWaste__inputs'>
						<Input
							required={true}
							placeholder='Имя'
							className='input'
							name='name'
							value={formData.name}
							onChange={handleChange}
						/>
						<Input
							required={true}
							type='tel'
							placeholder='Телефон'
							className='input'
							name='phone'
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
					<div className='modalWithWaste__agree'>
						<InputAgree
							name='checked'
							value={formData.checked}
							onChange={handleChange}
						/>
					</div>
					<ul className='modalWithWaste__list'>
						{selectedWaste.map(selectedWaste => (
							<li key={selectedWaste.id}>
								<div className='modalWithWaste__info'>
									<span>{selectedWaste.code}</span>
									<span>{selectedWaste.name}</span>
								</div>
								<Input
									placeholder='Количество отходов'
									className='input__waste'
									name='quantity'
									value={formData.quantity}
									onChange={handleChange}
									showUnit={true}
								/>
							</li>
						))}
					</ul>
					<MainButton
						disabled={!validateForm()}
						text='Оставить заявку'
						className='button__applications'
						onClick={() => setIsActive(true)}
					/>
				</form>
			</ModalWrapper>
			<ModalSucsess isOpen={isActive} onClose={handleActiveModal} />
		</>
	)
}

export default ModalWithWaste
