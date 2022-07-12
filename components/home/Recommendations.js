import { A11y, Navigation, Scrollbar } from 'swiper'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import Link from "next/link"
import uuid from 'react-uuid'

const Recommendations = () => {
  const slider = [
    {
      src: '/images/recommendations/recommendations1.jpg',
      price: '₹550,000',
      title: 'Khumaar Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations2.jpg',
      price: '₹160,000',
      title: 'Hunting Archives Zari Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations3.jpg',
      price: '₹95,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
    {
      src: '/images/recommendations/qaynaat-kalamkari-pashmina-shawl1_1.jpg',
      price: '₹160,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations1.jpg',
      price: '₹160,000',
      title: 'Khumaar Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations2.jpg',
      price: '₹550,000',
      title: 'Hunting Archives Zari Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations3.jpg',
      price: '₹160,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
    {
      src: '/images/recommendations/qaynaat-kalamkari-pashmina-shawl1_1.jpg',
      price: '₹160,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations1.jpg',
      price: '₹95,000',
      title: 'Khumaar Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations2.jpg',
      price: '₹550,000',
      title: 'Hunting Archives Zari Black Pashmina Shawl',
    },
    {
      src: '/images/recommendations/recommendations3.jpg',
      price: '₹160,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
    {
      src: '/images/recommendations/qaynaat-kalamkari-pashmina-shawl1_1.jpg',
      price: '₹160,000',
      title: 'Bahaar Do-Rukha Embroidered Pashmina Shawl',
    },
  ]

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1.2}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1040: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="most_viewed_swiper !px-10"
      id="blogSlide"
    >
      {slider.map((slide, ind) => (
        <SwiperSlide key={uuid()}>
          <Link href="/productdetails" prefetch={false}>
            <div
              className="inline-block cursor-pointer relative"
              title={slide.title}
              rel="noreferrer"
            >
              <Image
                height="547px"
                width="363px"
                src={slide.src}
                alt={slide.title}
                loading='lazy'
                className="outline-1"
              />
              <div className="flex flex-col justify-center ">
                <span className="float-left  text-lg whitespace-normal font-Orpheu">
                  {slide.title}
                </span>
                <span className="float-left mt-2 text-lg whitespace-normal mb-6">
                  {slide.price}
                </span>
              </div>
              <div className="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-full">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="hover:fill-maroon"
                    d="M4.69231 0.615387C2.3136 0.615387 0.384613 2.37415 0.384613 4.54403C0.384613 6.29565 1.13846 10.4529 8.55889 14.6553C8.69181 14.7298 8.84441 14.7692 9 14.7692C9.15559 14.7692 9.30819 14.7298 9.44111 14.6553C16.8615 10.4529 17.6154 6.29565 17.6154 4.54403C17.6154 2.37415 15.6864 0.615387 13.3077 0.615387C10.929 0.615387 9 2.99638 9 2.99638C9 2.99638 7.07101 0.615387 4.69231 0.615387Z"
                    fill="#B8906C"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Recommendations
