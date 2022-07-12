import React, { useState } from 'react'

import Button from '../Button'
import Product from '../category/Product'

const List = () => {
  const product = [
    {
      id: 1,
      name: 'Focus Paper Refill',
      href: '#',
      price: '1300',

      color: 'blue yellow green',
      hex: 'bg-blue-900 bg-[#ffff00] bg-green-700',

      size: '12l',
      categoty: 'sale travel ',
      description: '3 sizes available',
      imageSrc: '/images/cat-banner/shimmery-affair-zari.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
      showAddButton: true,
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '6400',

      color: 'blue yellow green',
      hex: 'bg-blue-900 bg-[#ffff00] bg-green-700',

      size: '2l',
      categoty: 'sale travel ',
      description: 'Walnut',
      imageSrc: '/images/cat-banner/samaa-red.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
      showAddButton: true,
    },
    {
      id: 3,
      name: 'Focus Carry Case',
      href: '#',
      price: '2500',

      color: 'blue',
      hex: 'bg-blue-900',

      size: '6l',
      categoty: 'sale travel ',
      description: 'Heather Gray',
      imageSrc: '/images/cat-banner/afsana-navy-zari.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
      showAddButton: true,
    },
    {
      id: 4,
      name: 'Focus Carry blue',
      href: '#',
      price: '900',

      color: 'white',
      hex: 'bg-slate-300',

      size: '12l',
      categoty: '',
      description: 'Heather blue',
      imageSrc: '/images/cat-banner/roshan-blue.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
      showAddButton: true,
    },
  ]
  const [products, setProducts] = useState(product)
  const handleList = (id) => {

    setProducts(products.filter(item => item.id !== id))

  }
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        {products.length > 0 ? (<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">

          {products.map((product) => (
            <div key={product.id} className="relative flex flex-col justify-center">
              <Product product={product} />

              <div className="absolute top-0 z-10 inset-x-0  rounded-lg p-4 flex items-end justify-end overflow-hidden cursor-pointer" onClick={() => handleList(product.id)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-maroon"
                    d="M4.69231 0.615387C2.3136 0.615387 0.384613 2.37415 0.384613 4.54403C0.384613 6.29565 1.13846 10.4529 8.55889 14.6553C8.69181 14.7298 8.84441 14.7692 9 14.7692C9.15559 14.7692 9.30819 14.7298 9.44111 14.6553C16.8615 10.4529 17.6154 6.29565 17.6154 4.54403C17.6154 2.37415 15.6864 0.615387 13.3077 0.615387C10.929 0.615387 9 2.99638 9 2.99638C9 2.99638 7.07101 0.615387 4.69231 0.615387Z"
                    fill="#B8906C"
                  />
                </svg>
              </div>
            </div>

          ))}
        </div>) : (
          <div className="text-black flex justify-center items-center bg-[#fdf1f2] p-4 text-lg">You have no items in your wish list.</div>
        )}
      </div>
    </div>
  )
}

export default List
