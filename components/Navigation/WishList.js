import React, { useState } from 'react'

import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link';

const product = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]
const WishList = () => {
  const [products, setProducts] = useState(product)
  const handleRemove = (id) => {
    setProducts(products.filter(item => item.id !== id))
  }

  return (
    <div>
      <div className="mt-8 mb-8 px-4 sm:px-6">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 relative flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    objectFit="contain"
                    loading='lazy'
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}> {product.name} </a>
                      </h3>
                      <button
                        type="button"
                        onClick={() => handleRemove(product.id)}
                      >
                        <i className="pe-7s-close text-black text-2xl"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">

                    <Link href="/shopping-cart" prefetch={false}>
                      <Button name="Add To Cart" className="!p-2" />
                    </Link>

                    <p className="ml-4">{product.price}</p>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <Button link="/wishlist" name="VIEW ALL WISHLIST" className="w-full" />
      </div>
    </div>
  )
}
export default WishList
