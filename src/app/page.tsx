import { FC } from 'react'

import Main from '@/components/Main/Main'
import AboutUs from '@/components/AboutUs/AboutUs'
import Advantages from '@/components/Advantages/Advantages'
import Licenses from '@/components/Licenses/Licenses'
import Process from '@/components/Process/Process'
import Contacts from '@/components/Contacts/Contacts'
import Footer from '@/components/Footer/Footer'

import '../styles/global.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ПРОМУТИЛИЗАЦИЯ | Утилизация отходов, строительного мусора в Самаре',
	description:
		'Промутилизация - экологиная переработка строительных отходов по Самаре и Самарской области. Ваш надежный партнер в вопросах переработки, выгодные условия. Мы занимаемся переработкой отоходов, утилизации строительных отходов разных классов опасности. Переработка бетона, резины, дерева, твердых материалов.',
	keywords:
		'Промутилизация, Утилизация Самара, утилизация по Самарской области, утилизация отходов, утилизация строительного мусора, переработка бетона, переработка резины, утилизация дерева',
	openGraph: {
		title: 'ПРОМУТИЛИЗАЦИЯ | Утилизация отходов, строительного мусора в Самаре',
		description:
			'Промутилизация - экологиная переработка строительных отходов по Самаре и Самарской области. Ваш надежный партнер в вопросах переработки с выгодными условиями. Мы занимаемся переработкой отоходов, утилизации строительных отходов разных классов опасности. Переработка бетона, резины, дерева, твердых материалов.',
		images: 'main.png',
		url: '/',
	},
}

const Home: FC = () => {
	return (
		<div className='wrapper'>
			<Main />
			<AboutUs />
			<Advantages />
			<Licenses />
			<Process />
			<Contacts />
			<Footer />
		</div>
	)
}

export default Home
