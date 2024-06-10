import React, { FC } from 'react'
import MainButton from '../UI/MainButton/MainButton'
import './Main.scss'

const Main: FC = () => {
	return (
		<section className='main'>
			<h1 className='main__title'>
				Экологичная переработка <br /> строительных отходов
			</h1>
			<p className='main__subtitle'>
				От приёма заявки до передачи отчетных документов
			</p>
			<MainButton className='button__applications' text={'Оставить заявку'} />
		</section>
	)
}

export default Main
