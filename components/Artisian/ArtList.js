import { GoLocation } from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const ArtList = () => {
  const artisan = [
    {
      src: 'https://www.pashmina.com//media/catalog/category/1_4.jpg',
      title: 'Ghulam Azeem',
      location: 'Lahore',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A2_4.jpg',
      title: 'Ghulam Nadeem',
      location: 'Kashmir',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A6_3.jpg',
      title: 'Ghulam Azeem',
      location: 'Lahore',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A7.jpg',
      title: 'Ghulam Azeem',
      location: 'Lahore',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A14_2.jpg',
      title: 'Ghulam Nadeem',
      location: 'Kashmir',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A4_1.jpg',
      title: 'Ghulam Azeem',
      location: 'Lahore',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A5.jpg',
      title: 'Ghulam Azeem',
      location: 'Lahore',
    },
    {
      src: 'https://www.pashmina.com//media/catalog/category/A2_4.jpg',
      title: 'Ghulam Nadeem',
      location: 'Kashmir',
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-6  mb-6  px-6">
      {artisan.map((artist) => {
        return (
          <Link href="/artisans/artist" key={artist.src}>
            <div className="hoverEvent">
              <div className="relative w-full h-full text-white ">
                <div className="w-full overflow-hidden">
                  <Image
                    src={artist.src}
                    alt="artisan"
                    width={300}
                    height={300}
                    layout="responsive"
                    loading='lazy'
                    className="hover:scale-105 transition-all ease-in-out duration-700 cursor-pointer "
                  />
                </div>
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="font-bold text-white text-xl">{artist.title}</p>
                  <p className="hoverEvent-content flex opacity -100 md:opacity-0 gap-x-1 items-center justify-center">
                    <GoLocation /> {artist.location}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ArtList
