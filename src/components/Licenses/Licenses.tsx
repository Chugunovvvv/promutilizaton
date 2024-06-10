import React, { FC } from 'react'
import Input from '../UI/Input/Input'
import './Licenses.scss'
import MainButton from '../UI/MainButton/MainButton'

const Licenses: FC = () => {
	return (
		<section className='licenses'>
			<h3 className='licenses__title title'>Лицензии</h3>
			<span className='licenses__subtitle'>
				Проверьте, есть ли ваш отход в нашей лицензии
			</span>
			<form action='' className='licenses__form'>
				<h3 className='licenses__form-title'>
					Введите код или название отхода и мы с вами свяжемся
				</h3>
				<Input
					placeholder='Начните вводить код или название'
					type='text'
					className='input'
				/>
				<div className='licenses__form-buttons'>
					<MainButton
						width='100%'
						className='button__add'
						text='Добавить отход'
					/>
					<MainButton
						width='100%'
						className='button__applications'
						text='Узнать стоимость'
					/>
				</div>
			</form>
		</section>
	)
}

export default Licenses
