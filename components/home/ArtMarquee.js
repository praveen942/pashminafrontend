import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import React from 'react'
import uuid from 'react-uuid'
const artist = [
  {
    src: '/images/art/art1.jpg',
    title: 'Ghulam Nadeem',
  },
  {
    src: '/images/art/art2.jpg',
    title: 'Mohammed Iqbal',
  },
  {
    src: '/images/art/art3.jpg',
    title: 'Tasleem',
  },
  {
    src: '/images/art/art4.png',
    title: ' Mohammed Abdullah',
  },
  {
    src: '/images/art/art1.jpg',
    title: ' Abdul Hamid',
  },
  {
    src: '/images/art/art2.jpg',
    title: 'Tasleem',
  },
  {
    src: '/images/art/art3.jpg',
    title: ' Mohammed Abdullah',
  },
  {
    src: '/images/art/art4.png',
    title: ' Abdul Hamid',
  },
]
const ArtMarquee = () => {
  return (
    <Marquee gradient={false} className="scrollbar-hide overflow-hidden">
      {artist.map((person) => (
        <Link href="/artisans/artist" key={uuid()} prefetch={false}>
          <div
            className="inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <Image
              height="346px"
              width="305px"
              src={person.src}
              alt={person.title}
              className=""
              loading='lazy'
            />
            <div className="flex justify-center text-lg">
              <h3>{person.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </Marquee>
  )
}

export default ArtMarquee
