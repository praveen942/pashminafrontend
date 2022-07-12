import 'swiper/css'
import 'swiper/css/navigation'

import { A11y, Navigation, Scrollbar } from 'swiper'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Slide from './Slide'

function Slider() {

  return (
    <div className='px-4 md:px-6 2xl:px-0 mt-4 md:mt-6'>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        scrollbar={{ draggable: true }}
        navigation={true}
        modules={[Navigation, Scrollbar, A11y]}
        id="sliderControl"
        className="mySwiper container mx-auto"
      >
        {[...Array(15)].map((_, ind) => (
          <SwiperSlide key={ind}>
            <Slide
              product={{
                id: 1,
                name: 'Myria 8069 Midi Dress',
                href: '#',
                price: '$90.00',
                imageSrc: '/images/cat-banner/shimmery-affair-zari.jpg',
                imageAlt: 'Myria 8069 Midi Dress',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Slider
