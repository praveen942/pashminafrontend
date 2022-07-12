import { BiMinus, BiPlus } from 'react-icons/bi'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

import Discount from './Discount';
import Image from 'next/image'
import Quantity from '../Quantity';

const data = [
  {
    id: 1,
    title: 'Coffee Brown Cashmere Scarf | Pure Pashmina',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    quantity: 1,
    imageSrc:
      '/images/cat-banner/samaa-red.jpg',
    imageAlt: "Front of men's Coffee Brown Cashmere Scarf | Pure Pashmina in black.",
  },
  {
    id: 2,
    title: 'Coffee Brown Cashmere Scarf | Pure Pashmina',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    quantity: 1,
    imageSrc:
      '/images/cat-banner/samaa-red.jpg',
    imageAlt: "Front of men's Coffee Brown Cashmere Scarf | Pure Pashmina in black.",
  },
  {
    id: 3,
    title: 'Coffee Brown Cashmere Scarf | Pure Pashmina',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    quantity: 1,
    imageSrc:
      '/images/cat-banner/samaa-red.jpg',
    imageAlt: "Front of men's Coffee Brown Cashmere Scarf | Pure Pashmina in black.",
  },

]

const OrderSummary = () => {

  const [showItems, setShowItems] = useState(true)
  const Stock = 20
  const [products, setProducts] = useState(data)
  const handlePlus = (id) => {
    const updatedPro = products.map((product) => {
      if (product.id === id) {
        if (product.quantity < Stock) {
          return { ...product, quantity: product.quantity + 1 }
        } else if (product.quantity >= Stock) {
          alert('out of Stock')
          return product
        }
      } else {
        return product
      }
    })
    setProducts([...updatedPro])

  }
  const handleMinus = (id) => {
    const updatedPro = products.map((product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 }
        } else {
          return product
        }
      } else {
        return product
      }
    })
    setProducts([...updatedPro])

  }
  const handleRemove = (id) => {
    const updatedPro = products.filter((product) => product.id !== id)
    setProducts([...updatedPro])

  }
  return (
    <div className="mb-10 lg:mt-0 sticky top-6 mb-12">
      <div className="text-lg font-medium bg-maroon text-white p-4 rounded-t-lg">
        <h2>Order summary</h2>
      </div>

      <div className=" bg-white border border-gray-200 rounded-b-lg shadow-sm">
        <div
          className="flex items-center justify-between p-4 border border-gray-200 mb-1"
          onClick={() => setShowItems(!showItems)}
        >
          <h3 className="">{products.length} Items in your cart</h3>
          {!showItems ? (
            <ChevronDownIcon
              className="-mr-1 ml-2 h-7 w-7 cursor-pointer hover:bg-gray-200 rounded-full"
              aria-hidden="true"
            />
          ) : (
            <ChevronUpIcon
              className="-mr-1 ml-2 h-7 w-7 cursor-pointer hover:bg-gray-200 rounded-full"
              aria-hidden="true"
            />
          )}
        </div>
        {showItems && (
          <div className={products.length <= 0
            ? "overflow-auto h-0"
            : 'overflow-auto h-96'
          } >
            <ul role="list" className="divide-y divide-gray-200">
              {products.map((product) => (

                <li key={product.id} className="flex py-6 px-4 sm:px-6">
                  <div className="flex-shrink-0 relative w-32 h-40 rounded-md">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      layout="fill"
                      loading='lazy'
                    />
                  </div>

                  <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium font-Orpheu text-base text-maroon"
                          >
                            {product.title}
                          </a>
                        </h4>
                        <p className="mt-1 text-sm text-gray-900">
                          {product.color}
                        </p>
                        <p className="mt-1 text-sm text-gray-900">
                          {product.size}
                        </p>
                      </div>

                      <div className="ml-4 flex-shrink-0 flow-root">

                        <button
                          type="button"
                          onClick={() => handleRemove(product.id)}
                        >
                          <i className="pe-7s-close text-black text-2xl"></i>
                        </button>

                      </div>
                    </div>

                    <div className="flex-1 pt-2 flex items-end justify-between">
                      <p className="mt-1 text-base font-medium text-gray-900">
                        {product.price}
                      </p>

                      <Quantity quantity={product.quantity} decrement={() => handleMinus(product.id)} increment={() => handlePlus(product.id)} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Taxes</dt>
            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">$75.52</dd>
          </div>
        </dl>
        <Discount />
      </div>
    </div>
  )
}

export default OrderSummary
