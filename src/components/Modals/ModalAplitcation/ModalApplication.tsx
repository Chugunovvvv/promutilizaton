'use client'
import React, { FC, useState } from 'react'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import Input from '@/components/UI/Input/Input'
import MainButton from '@/components/UI/MainButton/MainButton'
import './ModalApplication.scss'
import useForm from '@/hooks/useForm'
import { IInitialState } from '@/types'
import InputAgree from '@/components/UI/InputAgree/InputAgree'
import ModalSucsess from '../ModalSucsess/ModalSucsess'

interface IModalApplication {
	isOpen: boolean
	onClose: () => void
}

const initialState: IInitialState = {
	name: '',
	phone: '',
	commentary: '',
	email: '',
	checked: true,
}

const ModalApplication: FC<IModalApplication> = ({ isOpen, onClose }) => {
	const { handleChange, handleSubmit, formData, resetForm } = useForm({
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
	}
	const submit = async (
		e: React.FormEvent<HTMLFormElement>,
		data: IInitialState
	) => {
		e.preventDefault()
		if (validateForm()) {
			setIsActive(true)
		}
		resetForm()
		try {
			await fetch('/api/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<>
			<ModalWrapper isOpen={isOpen} onClose={onClose}>
				<form className='modalApplication' onSubmit={e => submit(e, formData)}>
					<h3 className='modalApplication__title'>Оставить заявку</h3>
					<div className='modalApplication__inputs'>
						<Input
							required={true}
							name='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='ФИО'
							className='input'
						/>
						<div className='modalApplication__contacts'>
							<Input
								required={true}
								placeholder='Телефон'
								className='input'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								type='tel'
							/>
							<Input
								placeholder='Почта'
								className='input'
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<textarea
							name='commentary'
							value={formData.commentary}
							onChange={handleChange}
							placeholder='Комментарий'
							className='modalApplication__textarea'
						></textarea>
						<InputAgree
							name='checked'
							value={formData.checked}
							onChange={handleChange}
						/>
					</div>
					<MainButton
						text='Оставить заявку'
						className='button__applications'
						disabled={!validateForm()}
					/>
				</form>
			</ModalWrapper>
			<ModalSucsess isOpen={isActive} onClose={handleActiveModal} />
		</>
	)
}

export default ModalApplication
