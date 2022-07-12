// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Scrollbar } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="">
      <div className="items-left mt-10 ml-4">
        <h2 className=" text-center    font-Orpheu text-4xl md:text-[40] 2xl:text-4xl">
          {' '}
          Pashmina Specials{' '}
        </h2>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          455: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        scrollbar={{ draggable: true }}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper max-w-[90%] my-4 lg:w-[70%] lg:my-4  mb-14 md:mb-14 "
        id="banner"
      >
        <SwiperSlide className="pb-[13px] md:pb-0">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full  my-4  h-48  md:h-64 xl:h-80 ">
              <Image
                src="/images/cat-banner/pashmina-shawl1.jpg"
                alt="pashmina-shawl1"
                layout="fill"
                objectFit="contain"
                loading='lazy'
              />
            </div>
            <h2 className=" text-base lg:text-lg font-bold ">OUTERWEAR</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full  my-4  h-48  md:h-64 xl:h-80 ">
              <Image
                src="/images/cat-banner/pashmina-shawl1.jpg"
                alt="pashmina-shawl1"
                layout="fill"
                objectFit="contain"
                loading='lazy'
              />
            </div>
            <h2 className=" text-base lg:text-lg font-bold ">OUTERWEAR</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full  my-4  h-48  md:h-64 xl:h-80 ">
              <Image
                src="/images/cat-banner/pashmina-shawl1.jpg"
                alt="pashmina-shawl1"
                layout="fill"
                objectFit="contain"
                loading='lazy'
              />
            </div>
            <h2 className=" text-base lg:text-lg font-bold ">OUTERWEAR</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full  my-4  h-48  md:h-64 xl:h-80 ">
              <Image
                src="/images/cat-banner/pashmina-shawl1.jpg"
                alt="pashmina-shawl1"
                layout="fill"
                objectFit="contain"
                loading='lazy'
              />
            </div>
            <h2 className=" text-base lg:text-lg font-bold ">OUTERWEAR</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner