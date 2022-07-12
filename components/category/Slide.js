import Button from '../Button'
import HeadlessSlideOver from './HeadlessSlideOver'
import Image from 'next/image'
import { OverlayProvider } from 'react-aria'
import SideBanner from './SideBanner'
import { useState } from 'react'

const Slide = ({ product }) => {
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false)

  const handleOnClose = () => setIsHeadlessOpen(true)
  return (
    <OverlayProvider>
      <div className="items-start pb-6 flex flex-col justify-center">
        <div className="relative text-center py-3 max-w-full">
          <div className="relative bg-white lg:rounded-3xl">
            <div className="relative ">
              <a href="#" className="text-center">
                <Image
                  width="550px"
                  className="rounded-md mx-4 w-full"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  height="800px"
                  loading='lazy'
                />
              </a>
              <a href="#" className="text-base md:text-lg flex items-center justify-center">
                {product.name}
              </a>
              <span className="visually-hidden flex items-center justify-center text-base md:text-lg">
                {product.price}
              </span>
              <div className="flex flex-col justify-center">
                <Button name="Quick View" className="uppercase self-center mt-2.5" onClick={handleOnClose} />

                <HeadlessSlideOver
                  open={isHeadlessOpen}
                  setOpen={setIsHeadlessOpen}
                  current="Choose Option"
                >
                  <SideBanner product={product} />
                </HeadlessSlideOver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OverlayProvider>
  )
}

export default Slide
