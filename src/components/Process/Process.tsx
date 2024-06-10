import React, { FC } from 'react'
import './Process.scss'
const Process: FC = () => {
	return (
		<section className='process content'>
			<h2 className='process__title title'>Процесс работы</h2>
			<div className='process__content'>
				<img src='/images/Process/Process.png' alt='Процесс работы' />
			</div>
		</section>
	)
}

export default Process
