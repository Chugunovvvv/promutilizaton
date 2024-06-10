'use client'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './AboutsUs.scss'
import 'swiper/css'

import swiper_content from '@/utils/swiper_content'
import SwiperImage from '../SwiperImage/SwiperImage'

const AboutUs: FC = () => {
	return (
		<section className='aboutUs content'>
			<h2 className='aboutUs__title title'>О нас</h2>
			<div className='aboutUs__swiper'>
				<Swiper spaceBetween={50} slidesPerView={1}>
					{swiper_content.map(swiper => (
						<SwiperSlide className='aboutUs__swiper-wrap' key={swiper.id}>
							<p className='aboutUs__swiper-text'>{swiper.text}</p>
							<SwiperImage image={swiper.image} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default AboutUs
