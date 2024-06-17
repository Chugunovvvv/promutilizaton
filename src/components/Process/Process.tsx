import React, { FC } from 'react'
import './Process.scss'
const Process: FC = () => {
	return (
		<section id='process' className='process content'>
			<h2 className='process__title title'>Процесс работы</h2>
			<picture>
				<source
					srcSet='/images/Process/Process.png'
					media='(min-width: 1600px)'
				/>
				<source
					srcSet='/icons/Process/Process-medium.svg'
					media='(min-width: 1024px)'
				/>
				<source
					srcSet='/images/Process/Process-tablet.png'
					media='(min-width: 600px)'
				/>
				<source
					srcSet='/icons/Process/Process-phone.svg'
					media='(min-width: 320px)'
				/>
				<img src='/images/icons/Process.svg' alt='Процесс работы' />
			</picture>
		</section>
	)
}

export default Process
