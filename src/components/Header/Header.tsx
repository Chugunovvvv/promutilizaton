import React, { FC } from 'react'
import './Header.scss'
import '../../styles/variables.scss'
import MainButton from '../UI/MainButton/MainButton'
import menu_links from '@/utils/menu_links'

const Header: FC = () => {
	return (
		<header className='header'>
			<div className='header__top'>
				<MainButton text={'Связаться с нами'} className='button__contact-us' />
				<h1 className='header__top-title'>Промутилизация</h1>
				<a href={`tel:79999999999`} className='header__top-phone'>
					+7 999 999 99 99
				</a>
			</div>
			<div className='header__bottom'>
				<nav className='header__bottom-nav'>
					<ul className='header__bottom-list'>
						{menu_links.map(link => (
							<li key={link.id}>{link.name}</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
