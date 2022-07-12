import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MenuIcon, MinusSmIcon, PlusSmIcon, XIcon } from '@heroicons/react/outline'

import Cart from '../Navigation/Cart'
import HeadlessSlideOver from '../category/HeadlessSlideOver'
import Image from 'next/image'
import Link from 'next/link'
import LogIn from '../Navigation/LogIn'
import { OverlayProvider } from 'react-aria'
import Search from '../Navigation/Search'
import WishList from '../Navigation/WishList'

const navigation = {
  pagesfirst: [
    { name: 'SHAWLS', href: '#' },
    { name: 'WRAPS', href: '#' },
    { name: 'SCARVES', href: '#' },
  ],
  categories: [
    {
      id: 'women',
      name: 'WOMEN',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {
              name: 'Tops', href: '#', items: [
                { name: 'Item 1', href: '#' },
                { name: 'Item 2', href: '#' },
                { name: 'Item 3', href: '#' },
              ]
            },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            {
              name: 'Browse All', href: '#', items: [
                { name: 'Item 1', href: '#' },
                { name: 'Item 2', href: '#' },
                { name: 'Item 3', href: '#' },
              ]
            },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'MEN',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            {
              name: 'Tops', href: '#', items: [
                { name: 'Item 1', href: '#' },
                { name: 'Item 2', href: '#' },
                { name: 'Item 3', href: '#' },
              ]
            },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'SHOP BY', href: '#' },
    { name: 'EDITORIAL', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false)
  const [openId, setOpenId] = useState(0)
  const handleOnClose = (id) => {
    setOpenId(id)
    setIsHeadlessOpen(true)
  }
  const [headerOpen, setHeaderOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <OverlayProvider>
      <div className=" flex flex-col ">
        <div className="relative">
          <div className="relative ">
            <div className="relative ">
              <header className="relative bg-maroon">
                {/* Mobile menu */}
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex z-40">
                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                      >
                        <Dialog.Panel className="relative max-w-xs w-full bg-rose-50 shadow-xl pb-12 flex flex-col overflow-y-auto">
                          <div className="px-4 pt-5 pb-2 flex">
                            <button
                              type="button"
                              className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>

                          {/* Links */}
                          <Tab.Group as="div" className="mt-2">
                            <div className="border-b border-gray-200">
                              <Tab.List className="-mb-px flex px-4 space-x-8">
                                {navigation.categories.map((category) => (
                                  <Tab
                                    key={category.name}
                                    className={({ selected }) =>
                                      classNames(
                                        selected
                                          ? 'text-gray-900 border-red-900'
                                          : 'text-gray-900 border-transparent',
                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base text-lg outline-0',
                                      )
                                    }
                                  >
                                    {category.name}
                                  </Tab>
                                ))}
                              </Tab.List>
                            </div>
                            <Tab.Panels as={Fragment}>
                              {navigation.categories.map((category) => (
                                <Tab.Panel
                                  key={category.name}
                                  className="pt-10 pb-8 px-4 space-y-10"
                                >
                                  <div className="grid grid-cols-2 gap-x-4">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-sm"
                                      >
                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75 relative w-26 h-28">
                                          <Image
                                            layout="fill"
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            loading='lazy'
                                            className="object-center object-cover"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block text-lg text-gray-900"
                                        >
                                          <span
                                            className="absolute z-10 inset-0"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${category.id}-${section.id}-heading-mobile`}
                                        className="text-lg text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                        className="mt-6 flex flex-col space-y-6"
                                      >
                                        {section.items.map((item) => item.items?.length > 0 ? (
                                          <Disclosure
                                            as="div"
                                            key={item.name}
                                            className="flow-root"
                                          >
                                            {({ open }) => (
                                              <>
                                                <div className="-my-3 flow-root">
                                                  <Disclosure.Button className="py-3 w-full flex items-center justify-between">
                                                    <a
                                                      className="-m-2 p-2 block text-gray-500"
                                                    >
                                                      {item.name}
                                                    </a>
                                                    <span className="ml-6 flex items-center">
                                                      {open ? (
                                                        <MinusSmIcon
                                                          className="h-5 w-5"
                                                          aria-hidden="true"
                                                        />
                                                      ) : (
                                                        <PlusSmIcon
                                                          className="h-5 w-5"
                                                          aria-hidden="true"
                                                        />
                                                      )}
                                                    </span>
                                                  </Disclosure.Button>
                                                </div>

                                                <Disclosure.Panel className="pt-4">
                                                  <ul
                                                    role="list"
                                                    aria-labelledby={`${section.name}-heading-mobile`}
                                                    className="ml-4 flex flex-col space-y-6"
                                                  >
                                                    {item.items.map((item) => (
                                                      <li
                                                        key={item.name}
                                                        className="flow-root"
                                                      >
                                                        <a
                                                          href={item.href}
                                                          className="-m-2 p-2 block text-gray-500"
                                                        >
                                                          {item.name}
                                                        </a>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </Disclosure.Panel>
                                              </>
                                            )}
                                          </Disclosure>
                                        ) : (
                                          <li
                                            key={item.name}
                                            className="flow-root"
                                          >
                                            <a
                                              href={item.href}
                                              className="-m-2 p-2 block text-gray-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </Tab.Panel>
                              ))}
                            </Tab.Panels>
                          </Tab.Group>

                          <div className="border-t border-red-900 py-6 px-4 space-y-6">
                            {navigation.pages.map((page) => (
                              <div key={page.name} className="flow-root">
                                <a
                                  href={page.href}
                                  className="-m-2 p-2 block text-lg text-gray-900"
                                >
                                  {page.name}
                                </a>
                              </div>
                            ))}
                          </div>

                          <div className="border-t border-red-900 py-6 px-4 space-y-6">
                            <div className="flow-root">
                              <a
                                href="#"
                                className="-m-2 p-2 block text-lg text-gray-900"
                              >
                                Sign in
                              </a>
                            </div>
                            <div className="flow-root">
                              <a
                                href="#"
                                className="-m-2 p-2 block text-lg text-gray-900"
                              >
                                Create account
                              </a>
                            </div>
                          </div>

                          <div className="border-t border-red-900 py-6 px-4">
                            <a href="#" className="-m-2 p-2 flex items-center">
                              <Image
                                height="24"
                                width="30"
                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                alt="asset"
                                loading='lazy'
                                className="w-5 h-auto block flex-shrink-0"
                              />
                              <span className="ml-3 block text-base text-lg text-gray-900">
                                CAD
                              </span>
                              <span className="sr-only">, change currency</span>
                            </a>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>

                <nav
                  aria-label="Top"
                  className="2xl:container  2xl:mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div className="w-full h-auto">
                    <div className="h-16 flex items-center justify-between">
                      <button
                        type="button"
                        className="bg-maroon rounded-md text-white lg:hidden"
                        onClick={() => setOpen(true)}
                      >
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Logo */}
                      <div className="flex lg:ml-0 cursor-pointer">
                        <Link href="/" className="flex" prefetch={false}>
                          <Image
                            className="mx-auto"
                            src="/images/logo.png"
                            alt="screenshot"
                            width="181"
                            height="35"
                            loading='lazy'
                          />
                        </Link>
                      </div>
                      {/* Flyout menus */}
                      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch font-Orpheu ">
                        <div className="h-full flex space-x-8">
                          {navigation.pagesfirst.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-white tracking-wide"
                            >
                              {page.name}
                            </a>
                          ))}
                          {navigation.categories.map((category, i) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <div
                                  className="h-full flex"
                                  onMouseOver={() => {
                                    setHeaderOpen(true)
                                    setIndex(i)
                                  }}
                                  onMouseLeave={() => {
                                    setHeaderOpen(false)
                                    setIndex(-1)
                                  }}
                                >
                                  <div className="relative flex">
                                    <Popover.Button
                                      className={classNames(
                                        open
                                          ? 'border-white text-white'
                                          : 'border-transparent text-white ',
                                        'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                                      )}
                                    >
                                      {category.name}
                                    </Popover.Button>
                                  </div>


                                  {headerOpen && index == i && (
                                    <Popover.Panel
                                      static
                                      className="z-20 absolute top-full inset-x-0 text-sm text-gray-500"
                                    >
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white">
                                        <div className="max-w-7xl mx-auto px-8">
                                          <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className="group relative text-base sm:text-sm"
                                                >
                                                  <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75 relative w-auto h-[348px]">
                                                    <Image
                                                      layout="fill"
                                                      objectFit="contain"
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      loading='lazy'
                                                      className="object-center object-cover"
                                                    />
                                                  </div>
                                                  <a
                                                    href={item.href}
                                                    className="mt-6 block font-medium text-gray-900"
                                                  >
                                                    <span
                                                      className="absolute z-10 inset-0"
                                                      aria-hidden="true"
                                                    />
                                                    {item.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                              {category.sections.map(
                                                (section) => (
                                                  <div key={section.name}>
                                                    <p
                                                      id={`${section.name}-heading`}
                                                      className="font-medium text-gray-900"
                                                    >
                                                      {section.name}
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby={`${section.name}-heading`}
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {section.items.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        ),
                                                      )}
                                                    </ul>
                                                  </div>
                                                ),
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  )}
                                  {/* </Transition> */}
                                </div>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-white"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>

                      <div className="flex text-white font-bold text-xl items-center">
                        <div
                          className="hidden sm:flex items-center cursor-pointer p-4"
                          onClick={() => handleOnClose(1)}
                        >
                          <Image
                            src="/images/search.svg"
                            width="20"
                            height="20"
                            alt="arrow"
                            loading='lazy'
                          />
                        </div>
                        <div
                          className="hidden sm:flex items-center cursor-pointer p-4"
                          onClick={() => handleOnClose(2)}
                        >
                          <Image
                            src="/images/user.svg"
                            width="20"
                            height="20"
                            alt="arrow"
                            loading='lazy'
                          />
                        </div>
                        <div
                          className="hidden sm:flex items-center cursor-pointer p-4"
                          onClick={() => handleOnClose(3)}
                        >
                          <Image
                            src="/images/heart.svg"
                            width="20"
                            height="20"
                            alt="arrow"
                            loading='lazy'
                          />
                        </div>
                        <div
                          className="hidden sm:flex items-center cursor-pointer p-4"
                          onClick={() => handleOnClose(4)}
                        >
                          <Image
                            src="/images/cart.svg"
                            width="20"
                            height="20"
                            alt="arrow"
                            loading='lazy'
                          />
                        </div>
                        {openId === 1 && (
                          <HeadlessSlideOver
                            open={isHeadlessOpen}
                            setOpen={setIsHeadlessOpen}
                          >
                            <div className="flex flex-col">
                              <Search />
                            </div>
                          </HeadlessSlideOver>
                        )}
                        {openId === 2 && (
                          <HeadlessSlideOver
                            open={isHeadlessOpen}
                            setOpen={setIsHeadlessOpen}
                          >
                            <div className="flex flex-col">
                              <LogIn />
                            </div>
                          </HeadlessSlideOver>
                        )}
                        {openId === 3 && (
                          <HeadlessSlideOver
                            open={isHeadlessOpen}
                            setOpen={setIsHeadlessOpen}
                          >
                            <div className="flex flex-col">
                              <WishList />
                            </div>
                          </HeadlessSlideOver>
                        )}
                        {openId === 4 && (
                          <HeadlessSlideOver
                            open={isHeadlessOpen}
                            setOpen={setIsHeadlessOpen}
                          >
                            <div className="flex flex-col">
                              <Cart />
                            </div>
                          </HeadlessSlideOver>
                        )}

                        <div
                          className="pt-2 sm:pt-0 inline-block mx-1 sm:mx-3 block sm:hidden"
                          onClick={() => handleOnClose(5)}
                        >
                          <Image
                            src="/images/cart.svg"
                            width="18"
                            height="18"
                            alt="cart"
                            loading='lazy'
                          />
                        </div>
                        {openId === 5 && (
                          <HeadlessSlideOver
                            open={isHeadlessOpen}
                            setOpen={setIsHeadlessOpen}
                          >
                            <div className="flex flex-col">
                              <Cart />
                            </div>
                          </HeadlessSlideOver>
                        )}
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>
    </OverlayProvider >
  )
}
