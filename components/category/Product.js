import Button from '../Button'
import HeadlessSlideOver from './HeadlessSlideOver'
import Image from 'next/image'
import { OverlayProvider } from 'react-aria'
import SideBanner from './SideBanner'
import { useState } from 'react'

const Product = ({ product, setProperty }) => {
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false)
  const handleOnClose = () => setIsHeadlessOpen(true)
  function handleFilter(e) {
    const allColors = document.querySelectorAll('.colorButtons')
    allColors.forEach((color) => {
      // if (
      //   color.classList.contains('outline') &&
      //   e.target.classList.contains('outline')
      // ) {
      //   console.log("hii");
      //   if (setProperty) {
      //     setProperty((property) => [...property, "all"])
      //   }
      // } else
      if (color.classList.contains('outline')) {
        let propremove = color.id

        if (setProperty) {
          setProperty((property) =>
            property.filter((item) => item !== propremove),
          )
        }
        color.classList.remove('outline')
        color.classList.remove('outline-2')
        color.classList.remove('outline-[#56112A]')
        color.classList.remove('outline-offset-2')

      }
      e.target.classList.add('outline')
      e.target.classList.add('outline-2')
      e.target.classList.add('outline-[#56112A]')
      e.target.classList.add('outline-offset-2')
      let propnew = e.target.id
      if (setProperty) {
        setProperty((property) => [...property, propnew])
      }
    })
  }
  let reports
  return (
    <OverlayProvider>
      <div className="h-full flex">
        <div className="flex-1 flex relative text-center max-w-full">
          <div className="relative bg-white flex-1 flex lg:rounded-3xl">
            <div className="relative flex-1 flex flex-col">
              <div className="group z-10 relative flex">
                <div className="w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                  <Image
                    width="404px"
                    height="606px"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    loading='lazy'
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="absolute inset-x-0 flex justify-center bottom-5">
                  <button
                    type="button"
                    className="whitespace-nowrap z-10 bg-white bg-opacity-75 px-4 py-2  rounded-md text-sm md:text-base text-gray-900 opacity-100 group-hover:opacity-100 focus:opacity-100"
                    onClick={handleOnClose}
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="mt-2 flex-1 flex items-center justify-between text-lg font-medium text-gray-900 flex-col sm:flex-column">
                <h3 className="flex-1 float-left line-clamp-2 text-lg whitespace-normal font-Orpheu">
                  {product.name}
                </h3>
                <p className="float-left text-base whitespace-normal mb-4">
                  ₹ {product.price}
                </p>
                <div
                  className={`${product.hex.split(' ').length <= 1
                      ? 'justify-center !grid-cols-none'
                      : ''
                    } gap-y-6 gap-x-6 grid grid-cols-3 sm:hidden mb-6`}
                >
                  {
                    (reports = product.hex.split(' ').map((hex, i) => {
                      return product.color
                        .split(' ')
                        .map((color, j) =>
                          i === j ? (
                            <div
                              className={`${hex} colorButtons rounded-full  w-5 h-5 cursor-pointer `}
                              key={`${i}_${j}`}
                              id={color}
                              onClick={handleFilter}
                            ></div>
                          ) : null,
                        )
                    }))
                  }
                </div>
              </div>
              <div
                className={`${product.hex.split(' ').length <= 1
                    ? 'justify-center !grid-cols-none'
                    : ''
                  } gap-y-6 gap-x-4 container mx-auto hidden  sm:flex justify-center`}
              >
                {
                  (reports = product.hex.split(' ').map((hex, i) => {
                    return product.color
                      .split(' ')
                      .map((color, j) =>
                        i === j ? (
                          <div
                            className={`${hex} colorButtons rounded-full  w-5 h-5 cursor-pointer `}
                            key={`${i}_${j}`}
                            id={color}
                            onClick={handleFilter}
                          ></div>
                        ) : null,
                      )
                  }))
                }
              </div>

              {product.showAddButton && (
                <Button
                  name="Add To Cart"
                  className="uppercase self-center mt-8"
                />
              )}

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
    </OverlayProvider>
  )
}

export default Product
