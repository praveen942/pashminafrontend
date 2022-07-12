import { Menu, Transition } from '@headlessui/react'

import { CheckCircleIcon } from '@heroicons/react/solid'
import { DotsVerticalIcon } from '@heroicons/react/outline'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import List from "../WishPage/List"
export default function Example() {
  return (
    <div className="bg-white">
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Your WishList
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>
        </div>

        <List />
       </div>

    </div>
  )
}
