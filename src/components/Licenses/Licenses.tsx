'use client'
import React, { FC, FormEvent, useState } from 'react'
import Input from '../UI/Input/Input'
import './Licenses.scss'
import MainButton from '../UI/MainButton/MainButton'

import ModalApplication from '../Modals/ModalAplitcation/ModalApplication'
import useModal from '@/hooks/useModal'
import LicensesWaster from '../LicensesWaster/LicensesWaster'
import { ILicenses } from '@/utils/licenses'
import SelectedWaster from '../SelectedWaster/SelectedWaster'
import ModalWithWaste from '../Modals/ModalWithWaste/ModalWithWaste'

const Licenses: FC = () => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal()
	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	const [inputValue, setInputValue] = useState<string>('')
	const [showWaster, setShowWaster] = useState<boolean>(false)
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		setShowWaster(inputValue.length >= 2)
	}

	const [selectedWaster, setSelectedWaster] = useState<ILicenses[]>([])

	const handleSelectWaster = (license: ILicenses) => {
		if (!selectedWaster.some(selected => selected.id === license.id)) {
			setSelectedWaster(prev => [...prev, license])
		}

		setInputValue('')
		setShowWaster(false)
	}

	const handleRemoveWaste = (licenseId: number) => {
		setSelectedWaster(prev => prev.filter(license => license.id !== licenseId))
	}
	console.log(selectedWaster)
	return (
		<section id='licenses' className='licenses'>
			<div className='licenses__content'>
				<h3 className='licenses__title title'>Лицензии</h3>
				<span className='licenses__subtitle'>
					Проверьте, есть ли ваш отход в нашей лицензии
				</span>
				<form action='' className='licenses__form' onSubmit={handleSubmitForm}>
					<h3 className='licenses__form-title'>
						Введите код или название отхода и мы с вами свяжемся
					</h3>
					{selectedWaster.length > 0 && (
						<SelectedWaster
							selectedWaster={selectedWaster}
							handleRemoveWaste={handleRemoveWaste}
						/>
					)}
					<div className='licenses__form-input'>
						<Input
							placeholder='Начните вводить код или название'
							type='text'
							className='input'
							value={inputValue}
							onChange={handleInputChange}
						/>
						{showWaster && (
							<LicensesWaster
								inputValue={inputValue}
								onSelectWaster={handleSelectWaster}
								selectedWaste={selectedWaster}
							/>
						)}
					</div>

					<MainButton
						className='button__applications'
						text='Узнать стоимость'
						onClick={handleOpenModal}
					/>
				</form>
				{selectedWaster.length > 0 ? (
					<ModalWithWaste
						isOpen={isOpen}
						onClose={handleCloseModal}
						selectedWaste={selectedWaster}
					/>
				) : (
					<ModalApplication isOpen={isOpen} onClose={handleCloseModal} />
				)}
			</div>
		</section>
	)
}

export default Licenses
