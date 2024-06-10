import React from 'react'
import { useSwiper } from 'swiper/react'
import './SwiperImage.scss'

const SwiperImage = ({ image }: any) => {
	const swiper = useSwiper()

	return (
		<div className='swiper-img'>
			<img
				src='/icons/Swiper/ArrowButton.svg'
				alt='Стрелочка назад'
				onClick={() => swiper.slidePrev()}
				style={{ cursor: 'pointer' }}
			/>
			<div className='swiper-image'>
				<img src={image} alt='Картинка в слайдере' />
			</div>
			<img
				src='/icons/Swiper/ArrowButton.svg'
				alt='Стрелочка вперед'
				style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
				onClick={() => swiper.slideNext()}
			/>
		</div>
	)
}

export default SwiperImage
