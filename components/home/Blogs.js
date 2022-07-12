// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import Link from "next/link"
import React from 'react'
import uuid from 'react-uuid'

// Data
const blog = [
  {
    src: '/images/blog/blog1.jpg',
    title: "It's time to dress up again",
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog2.jpg',
    title: 'Our sustainability initiatives',
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog1.jpg',
    title: "It's time to dress up again",
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog2.jpg',
    title: 'Our sustainability initiatives',
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog1.jpg',
    title: "It's time to dress up again",
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog2.jpg',
    title: 'Our sustainability initiatives',
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog1.jpg',
    title: "It's time to dress up again",
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog2.jpg',
    title: 'Our sustainability initiatives',
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
  {
    src: '/images/blog/blog1.jpg',
    title: "It's time to dress up again",
    des: 'As fashion moves into a new, post-lockdown state, rediscover the joy of dressing up every day — because why not?',
  },
]
function Blogs() {
  return (
    <div className="px-4 md:px-6 2xl:px-0 mt-10">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper container mx-auto mb-5 !pb-8 md:!pb-12"
        id="blogSlide"
      >
        {blog.map((post) => (
          <SwiperSlide key={uuid()}>
            <Link href="/blog/test" prefetch={false}>
              <div className="cursor-pointer">
                <div
                  title={post.title}
                  rel="noreferrer"
                  className="relative"
                >
                  <Image
                    alt="post"
                    src={post.src}
                    width={200}
                    height={135}
                    layout="responsive"
                    objectFit="contain"
                    loading='lazy'
                  />
                </div>
                <h3 className="font-Orpheu text-lg lg:text-2xl font-normal mt-3">
                  {post.title}
                </h3>

                <p className="font-sans text-sm lg:text-base font-light mt-2">
                  {post.des}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Blogs
