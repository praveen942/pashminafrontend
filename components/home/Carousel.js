import Image from 'next/image'
import React from 'react'
const images = [
  '/images/carousel1.png',
  '/images/carousel2.png',
  '/images/carousel3.png',
  '/images/carousel4.png',
]

const Carousel = () => {
  const [currentImage, setCurrentImage] = React.useState(0)

  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef()
    return acc
  }, {})

  const scrollToImage = (i) => {
    setCurrentImage(i)

    refs[i].current.scrollIntoView({
      behavior: 'smooth',

      block: 'nearest',

      inline: 'start',
    })
  }

  const totalImages = images.length

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0)
    } else {
      scrollToImage(currentImage + 1)
    }
  }

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1)
    } else {
      scrollToImage(currentImage - 1)
    }
  }

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center'

  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  )

  return (
    <div className="p-12 flex justify-center w-screen  items-center bg-rose-50">
      <div className="relative w-full">
        <h1 className=" text-center sm:text-4xl text-xl">
          Most Viewed Pashminas{' '}
        </h1>
        <div className="carousel">
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <Image
                className="w-full object-contain"
                src={img}
                width="300"
                height="500"
                alt="dansk"
                loading='lazy'
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  )
}
export default Carousel
