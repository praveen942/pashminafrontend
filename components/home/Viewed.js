import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowRight from '../icons/ArrowRight'
import Image from 'next/image'
import Link from "next/link"
import React from 'react'
import uuid from 'react-uuid'

const Viewed = () => {
  const slider = [
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
    },
    {
      src: '/images/viewed/view1.jpg',
      title: 'Solid Pashmina',
    },
    {
      src: '/images/viewed/view2.jpg',
      title: 'Ombre Pashmina',
    },
    {
      src: '/images/viewed/view3.jpg',
      title: 'Reversible Pashmina',
    },
  ]

  const getText = text => {
    let customItems = text.split(" ");

    for (let i = 0; i < customItems.length; i++) {
      customItems[i] = customItems[i] + "<br/>";
    }

    return customItems.join("");
  }

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={2}
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
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="most_viewed_swiper !px-5 md:!px-10 !pb-6"
      id="blogSlide"
    >
      {slider.map((slide) => (
        <SwiperSlide key={uuid()}>
          <Link href="/productdetails" prefetch={false}>
            <div
              className="group inline-block cursor-pointer relative arrow_move_left"
              rel="noreferrer"
            >
              <Image
                height="547px"
                width="363px"
                src={slide.src}
                alt={slide.title}
                loading='lazy'
                className="outline-1 outline  outline-offset-[-15px] yellow-boder hover:scale-110 duration-500"
              />
              <div className="flex-1 flex items-end space-x-4">
                <span className='font-Orpheu text-base md:text-2xl whitespace-nowrap' dangerouslySetInnerHTML={{ __html: getText(slide.title) }} />
                <div className="scale-50 md:scale-75 group-hover:md:scale-90 transition-all ease-in-out duration-300 mb-1 md:mb-2">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default Viewed
