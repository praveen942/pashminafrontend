import { A11y, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import Link from 'next/link'
import uuid from 'react-uuid'

const relatedProducts = [
  {
    id: 1,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: '/images/dusty-pink-pashmina-shawl1.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  {
    id: 2,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: '/images/dusty-pink-pashmina-shawl1.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  {
    id: 3,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: '/images/dusty-pink-pashmina-shawl1.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  {
    id: 4,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: '/images/dusty-pink-pashmina-shawl1.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  {
    id: 5,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: '/images/dusty-pink-pashmina-shawl1.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
]
export default function ShoppingOption() {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={2}
      breakpoints={{
        536: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1040: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="container mx-auto !pb-10"
      id="blogSlide"
    >
      {relatedProducts.map((relatedProduct) => (
        <SwiperSlide key={uuid()}>
          <div className="w-full rounded-md overflow-hidden group-hover:opacity-75">
            <Image
              src={relatedProduct.imageSrc}
              alt={relatedProduct.imageAlt}
              width={200}
              height={300}
              layout="responsive"
              objectFit="contain"
              loading='lazy'
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="md:text-xl text-gray-700">
              <Link href={relatedProduct.href}>
                {relatedProduct.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {relatedProduct.color}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {relatedProduct.price}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
