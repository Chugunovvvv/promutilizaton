'use client'
import React, { FC } from 'react'
import MainButton from '../UI/MainButton/MainButton'
import './Main.scss'
import useModal from '@/hooks/useModal'
import ModalApplication from '../Modals/ModalAplitcation/ModalApplication'

const Main: FC = () => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal()
	return (
		<>
			{/* <svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				style={{
					position: 'absolute',
					bottom: '0',
					left: '0',
					zIndex: '10',
					// width: '100%',
					// height: '100%',
				}}
			>
				<path
					fill='#ffffff'
					fill-opacity='1'
					d='M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
				></path>
			</svg> */}

			{/* <svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				viewBox='0 0 2400 800'
				opacity='1'
				style={{
					position: 'absolute',
					bottom: '0',
					left: '0',
					background: 'transparent',
					// width: '100%',
					// height: '100%',
				}}
			>
				<defs>
					<linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sssurf-grad'>
						<stop
							stop-color='hsla(208, 78%, 37%, 1.00)'
							stop-opacity='1'
							offset='0%'
						></stop>
						<stop
							stop-color='hsl(208, 74%, 93%)'
							stop-opacity='1'
							offset='100%'
						></stop>
					</linearGradient>
				</defs>
				<g
					fill='hsla(0, 0%, 100%, 1.00)'
					transform='matrix(1,0,0,1,-1.936279296875,373.0109558105469)'
				>
					<path
						d='M-10,10C158.75,16.875,464.58333333333337,65.08333333333334,800,43C1135.4166666666665,20.916666666666664,1266.6666666666665,-97.875,1600,-96C1933.3333333333335,-94.125,2181.25,-51.33333333333334,2400,52C2618.75,155.33333333333334,3254.1666666666665,223.33333333333331,2650,400C2045.8333333333335,576.6666666666667,156.25,795.8333333333334,-500,900'
						transform='matrix(1,0,0,1,0,25)'
						opacity='NaN'
					></path>
				</g>
			</svg> */}

			<section id='main' className='main'>
				<h1 className='main__title'>
					Экологичная переработка <br /> строительных отходов
				</h1>
				<p className='main__subtitle'>
					От приёма заявки до передачи отчетных документов
				</p>
				<MainButton
					className='button__applications'
					text={'Оставить заявку'}
					onClick={handleOpenModal}
				/>
				<ModalApplication isOpen={isOpen} onClose={handleCloseModal} />
			</section>
		</>
	)
}

export default Main
