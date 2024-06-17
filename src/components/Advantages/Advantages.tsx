import React, { FC } from 'react'
import './Advantages.scss'
import advantages from '@/utils/advantages'

const Advantages: FC = () => {
	return (
		<section id='advantages' className='advantages content'>
			<h2 className='advantages__title title'>С нами выгодно работать</h2>
			<ul className='advantages__list'>
				{advantages.map(advantage => (
					<li className='advantage__item' key={advantage.id}>
						<h3 className='advantage__item-title'>{advantage.title}</h3>
						<p className='advantage__item-subtitle'>{advantage.subtitle}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Advantages
