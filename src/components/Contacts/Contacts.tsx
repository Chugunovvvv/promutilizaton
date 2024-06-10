import React, { FC } from 'react'
import MainButton from '../UI/MainButton/MainButton'
import './Contacts.scss'

const Contacts: FC = () => {
	return (
		<section className='contacts'>
			<h2 className='contacts__title title'>Контакты</h2>
			<ul className='contacts__list'>
				<li>
					<h3 className='contacts__list-title'>Прайс</h3>
					<MainButton text='Оставить заявку' className='button__applications' />
				</li>
				<li>
					<h3 className='contacts__list-title'>Адрес офиса</h3>
					<p className='contacts__list-text'>
						г. Самара,  ул. Красноармейская, стр.135, помещение Н2
					</p>
				</li>
				<li>
					<h3 className='contacts__list-title'>Адрес полигона</h3>
					<p className='contacts__list-text'>
						г. Самара,  ул. Красноармейская, стр.135, помещение Н2
					</p>
				</li>
				<li>
					<h3 className='contacts__list-title'>Связаться с нами</h3>
					<div className='contacts__list-socials'>
						<a href='tel:79270117717'>+7 (927) 011-77-17</a>
						<a href='mailto:gkprom163@mail.ru'>gkprom163@mail.ru</a>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Contacts
