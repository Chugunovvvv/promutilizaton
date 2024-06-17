'use client'
import React, { FC } from 'react'
import './Header.scss'
import '../../styles/variables.scss'
import MainButton from '../UI/MainButton/MainButton'
import menu_links from '@/utils/menu_links'
import useModal from '@/hooks/useModal'
import ModalApplication from '../Modals/ModalAplitcation/ModalApplication'
import MobileButton from '../UI/MobileButton/MobileButton'
import useMobileButton from '@/hooks/useMobileButton'
import Link from 'next/link'

const Header: FC = () => {
	const { isOpen, handleCloseModal, handleOpenModal } = useModal()
	const { active, handleToggleOpenMenu, handleCloseMenu } = useMobileButton()
	return (
		<header className='header'>
			<div className='header__top'>
				<MainButton
					text={'Связаться с нами'}
					className='button__contact-us'
					onClick={handleOpenModal}
				/>
				<Link href='/' className='header__top-title'>
					Промутилизация
				</Link>
				<a href={`tel:79270117717`} className='header__top-phone'>
					+7 927 011 77 17
				</a>
				<MobileButton onClick={handleToggleOpenMenu} active={active} />
			</div>
			<div className='header__bottom'>
				<nav
					className={
						active ? 'header__bottom-nav active' : 'header__bottom-nav'
					}
				>
					<ul className='header__bottom-list'>
						{menu_links.map(link => (
							<li key={link.id} onClick={handleCloseMenu}>
								<a href={link.href}>{link.name}</a>
							</li>
						))}
						<a href={`tel:79270117717`} className='header__burger-phone'>
							+7 927 011 77 17
						</a>
					</ul>
				</nav>
			</div>
			<ModalApplication isOpen={isOpen} onClose={handleCloseModal} />
		</header>
	)
}

export default Header
