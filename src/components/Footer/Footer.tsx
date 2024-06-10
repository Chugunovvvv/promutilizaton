import React, { FC } from 'react'
import './Footer.scss'

const Footer: FC = () => {
	return (
		<footer className='footer'>
			<p className='footer__politics'>Политика конфиденциальности</p>
			<p className='footer__company'>Промутилизация</p>
		</footer>
	)
}

export default Footer
