import { FC } from 'react'

import Main from '@/components/Main/Main'
import AboutUs from '@/components/AboutUs/AboutUs'
import Advantages from '@/components/Advantages/Advantages'
import Licenses from '@/components/Licenses/Licenses'
import Process from '@/components/Process/Process'
import Contacts from '@/components/Contacts/Contacts'
import Footer from '@/components/Footer/Footer'

import '../styles/global.scss'

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
