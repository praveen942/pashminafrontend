import { BiMinus, BiPlus } from 'react-icons/bi'

import Button from '../Button'
import Image from 'next/image'
import Quantity from '../Quantity'
import React from 'react'

const data = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    quantity: 1,
    price: '$90.00',
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
const Cart = () => {
  const Stock = 20
  const [products, setProducts] = React.useState(data)
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
    <div>
      <div className="mt-8 mb-8 px-4 sm:px-6">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
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
                      <a href={product.href}> {product.name} </a>
                      <button
                        type="button"
                        onClick={() => handleRemove(product.id)}
                      >
                        <i className="pe-7s-close text-black text-2xl"></i>
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-xs">
                    <Quantity quantity={product.quantity} decrement={() => handleMinus(product.id)} increment={() => handlePlus(product.id)} />
                    <p className="ml-4">{product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Button name="Checkout" className="w-full mt-6" />
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium cusColor hover:cusColor"
              onClick={() => setOpen(false)}
            >
              Continue Shopping<span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart
