import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'

import { BsArrowRight } from 'react-icons/bs'
import MultiRangeSlider from './MultiSlider'
import Navigate from './Navigate'
import { XIcon } from '@heroicons/react/outline'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'bg-slate-300', checked: false },
      { value: 'yellow', label: 'bg-[#ffff00]', checked: false },
      { value: 'blue', label: 'bg-blue-900', checked: false },
      { value: 'brown', label: 'bg-amber-900', checked: false },
      { value: 'green', label: 'bg-green-700', checked: false },
      { value: 'purple', label: 'bg-[#800080]', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'newArrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '1-500', label: 'Below Rs.500', checked: false },
      { value: '1001-1500', label: 'Rs.1001-1500', checked: false },
      { value: '1501-2000', label: 'Rs.1501-2000', checked: false },
      { value: '2001-2500', label: 'Rs.2001-2500', checked: false },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [property, setProperty] = useState([])
  const [viewGrid, setViewGrid] = useState(3)
  const lowerRef = useRef()
  const upperRef = useRef()
  let prev = ''
  const handleSubmit = (e) => {
    e.preventDefault()
    let value = ''
    const lower = lowerRef.current.value
    const upper = upperRef.current.value

    value = lower + '_' + upper
    if (property.includes(value)) {
      return
    }
    setProperty((property) => [...property, value])
  }
  const clearFilter = (e) => {
    e.preventDefault()
    let value
    property.map((item) => {
      if (item.includes('_')) {
        value = item
      }
    }),
      setProperty((property) => property.filter((item) => item !== value))

    lowerRef.current.value = ''
    upperRef.current.value = ''
  }
  function handleFilter(e) {
    if (e.target.checked) {
      if (e.target.parentElement.id === 'color') {
        let id = e.target.parentElement.id
        const checked = document.querySelectorAll(`#${id} input:checked`)
        const selected = document.querySelectorAll(
          `#${id} label div:last-child`,
        )
        checked.forEach((item) => {
          selected.forEach((item2) => {
            if (item2.classList.contains(item.id)) {
              item2.classList.add('outline')
              item2.classList.add('outline-2')
              item2.classList.add('outline-[#56112A]')
              item2.classList.add('outline-offset-2')
            }
          })
        })
      }
      let propnew = e.target.value

      setProperty((property) => [...property, propnew])
    } else {
      if (e.target.parentElement.id === 'color') {
        let id = e.target.parentElement.id
        const checked = document.querySelectorAll(`#${id} input`)
        const selected = document.querySelectorAll(
          `#${id} label div:last-child`,
        )
        checked.forEach((item) => {
          selected.forEach((item2) => {
            if (item.checked === false && item2.classList.contains(item.id)) {
              item2.classList.remove('outline')
              item2.classList.remove('outline-2')
              item2.classList.remove('outline-[#56112A]')
              item2.classList.remove('outline-offset-2')
            }
          })
        })
      }
      let propremove = e.target.value
      setProperty((property) => property.filter((item) => item !== propremove))
    }
  }

  return (
    <div className="bg-white mt-10">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="ml-auto relative max-w-xs w-full h-full bg-rose-50 shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
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
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              {section.id === 'color' ? (
                                <div className="gap-y-6 gap-x-6 grid grid-cols-5">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                      id={section.id}
                                    >
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        onClick={handleFilter}
                                        defaultChecked={option.checked}
                                        className="filter-property h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 hidden"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600 "
                                      >
                                        <div className="dropdown inline ">
                                          <div className="dropdown-menu absolute hidden  flex pt-4dropdown-menu border rounded-lg mt-[-5.75rem] border-gray-300">
                                            <div
                                              className={`w-16 h-16 ${option.label} block  rounded-t-md`}
                                            ></div>
                                            <p clasName="text-center  block">
                                              {option.value}
                                            </p>
                                          </div>

                                          <div
                                            className={`${option.label} filter-${section.id}-${optionIdx} rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-gray-400 hover:outline-offset-2 flex justify-center items-center`}
                                          >
                                            <i className="pe-7s-check mix-blend-screen text-black text-xl"></i>
                                          </div>
                                        </div>
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : section.id === 'price' ? (
                                <div >
                                  <MultiRangeSlider
                                    min={200}
                                    max={8000}
                                    onChange={({ min, max }) => console.log(`hii`)}
                                    setProperty={setProperty}
                                    property={property}
                                  />

                                  <div className="mt-4">
                                    <div className="flex items-center space-x-1">
                                      <span>Enter Price Range</span>
                                      <span
                                        className="text-sm text-maroon cursor-pointer"
                                      >
                                        |
                                      </span>
                                      <span
                                        className="text-sm text-maroon cursor-pointer"
                                        onClick={clearFilter}
                                      >
                                        Clear
                                      </span>
                                    </div>
                                    <div className="flex mt-2">
                                      <input
                                        ref={lowerRef}
                                        placeholder="min"
                                        type="number"
                                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      />

                                      <input
                                        ref={upperRef}
                                        placeholder="max"
                                        type="number"
                                        className="shadow appearance-none border rounded w-1/2 py-2 ml-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                      />

                                      <button
                                        className="bg-maroon ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleSubmit}
                                      >
                                        <BsArrowRight />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        onClick={handleFilter}
                                        className="h-4 w-4 accent-maroon rounded text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="container mx-auto px-4 md:px-6 3xl:px-0">
          <div className="relative z-10 flex justify-end items-baseline lg:justify-between lg:pt-0 pb-4 md:pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-Orpheu tracking-tight text-gray-900 hidden lg:block">
              Filter
            </h1>

            <div className="flex-1 lg:flex-none flex justify-between lg:justify-end lg:items-center">
              <button
                type="button"
                className="flex space-x-2 items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-gray-700 hover:text-gray-500">Filter</span>
                <div className="text-gray-400">
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </div>
              </button>

              <Menu as="div" className="relative inline-block">
                <Menu.Button className="flex space-x-2 items-center">
                  <span className="text-gray-700 hover:text-gray-900 font-medium">Sort</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40  rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500 hidden lg:block"
              >
                <span className="sr-only">View grid</span>
                <ViewGridIcon
                  className="w-5 h-5"
                  aria-hidden="true"
                  onClick={() => {
                    setViewGrid(viewGrid === 3 ? 4 : 3)
                  }}
                />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 sticky">
            {/* <h2 id="products-heading" className="sr-only">
              Products
            </h2> */}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-lg text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-lg text-gray-900">
                              {section.name}
                            </span>
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
                        </h3>

                        <Disclosure.Panel className="pt-6">
                          {section.id === 'color' ? (
                            <div className="gap-y-6 gap-x-6 grid grid-cols-5">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                  id={section.id}
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onClick={handleFilter}
                                    defaultChecked={option.checked}
                                    className="filter-property h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 hidden"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600 "
                                  >
                                    <div className="dropdown inline relative">
                                      <div className="dropdown-menu absolute bg-white hidden flex pt-4dropdown-menu border rounded-lg mt-[-5.75rem] border-gray-300 text-center left-[-15px]">
                                        {' '}
                                        <div
                                          className={`w-16 h-16 ${option.label} block  rounded-t-md`}
                                        ></div>
                                        <p clasName="text-center  block bg-white">
                                          {option.value}
                                        </p>
                                      </div>

                                      <div
                                        className={`${option.label} filter-${section.id}-${optionIdx} rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-gray-400 hover:outline-offset-2`}
                                      ></div>
                                    </div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          ) : section.id === 'price' ? (
                            <div >
                              <MultiRangeSlider
                                min={200}
                                max={8000}
                                onChange={({ min, max }) => console.log(`hii`)}
                                setProperty={setProperty}
                                property={property}
                              />

                              <div className="mt-4">
                                <div className="flex items-center space-x-1">
                                  <span>Enter Price Range</span>
                                  <span
                                    className="text-sm text-maroon cursor-pointer"
                                  >
                                    |
                                  </span>
                                  <span
                                    className="text-sm text-maroon cursor-pointer"
                                    onClick={clearFilter}
                                  >
                                    Clear
                                  </span>
                                </div>
                                <div className="flex mt-2">
                                  <input
                                    ref={lowerRef}
                                    placeholder="min"
                                    type="number"
                                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  />

                                  <input
                                    ref={upperRef}
                                    placeholder="max"
                                    type="number"
                                    className="shadow appearance-none border rounded w-1/2 py-2 ml-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  />

                                  <bufilterstton
                                    className="bg-maroon ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={handleSubmit}
                                  >
                                    <BsArrowRight />
                                  </bufilterstton>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                  id={section.id}
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onClick={handleFilter}
                                    defaultChecked={option.checked}
                                    className="filter-property w-4 h-4 accent-maroon rounded"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600 cursor-pointer"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <Navigate
                  grid={viewGrid}
                  property={property}
                  setProperty={setProperty}
                />
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
