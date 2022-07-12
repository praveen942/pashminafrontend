import { Dialog, Transition } from '@headlessui/react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HeartIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'

import AddtoBag from '../components/productdetails/AddtoBag'
import Button from '../components/Button'
import Facebook from '../components/icons/brand-icons/Facebook'
import Faq from '../components/home/Faq'
import Head from 'next/head'
import Image from 'next/image'
import Instagram from '../components/icons/brand-icons/Instagram'
import Layout from '../components/Layout'
import Pinterest from '../components/icons/brand-icons/Pinterest'
import Script from 'next/script'
import Slider from '../components/category/Slider'
import { StarIcon } from '@heroicons/react/solid'
import Status from "../components/productdetails/Status"
import TopHeader from '../components/TopHeader'
import Twitter from '../components/icons/brand-icons/Twitter'

const product = {
  name: 'Riverside Blue Cashmere Wrap | Pure Pashmina',
  price: '₹8,500',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: '/images/product/riverside-blue-cashmere-wrap1.webp',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 2,
      name: 'Angled view',
      src: '/images/product/riverside-blue-cashmere-wrap3.webp',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 3,
      name: 'Angled view',
      src: '/images/product/riverside-blue-cashmere-wrap5.webp',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-red-900',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-red-900',
    },
  ],
  sizes: [
    {
      name: '200cm x 70cm',
    },
    {
      name: '80in x 28in',
    },
  ],
  description: `
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/time-to-craft.webp" class="w-5" alt="time-to-craft" lazy="true" />
    <span>Time taken to craft - 5 Days</span>
  </div>
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/100_-pure-pashmina.webp" class="w-5" alt="100 -pure-pashmina" lazy="true" />
    <span>100% Cashmere</span>
  </div>
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/handmade.webp" class="w-5" alt="handmade" lazy="true" />
    <span>Handwoven on traditional looms</span>
  </div>
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/authenticity.webp" class="w-5" alt="authenticity" lazy="true" />
    <span>Certified Authenticity</span>
  </div>
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/ethical-and-sustainable.webp" class="w-5" alt="ethical-and-sustainable" lazy="true" />
    <span>Ethical &amp; Sustainable</span>
  </div>
  <div class="flex items-center gap-2 mt-1">
    <Image src="/images/product/aqua-pashmina-shawl.webp" class="w-5" alt="aqua-pashmina-shawl" lazy="true" />
    <span>Shipped within 48 Hours</span>
  </div>
  `,
}

const monogramColors = [
  { value: 'white', label: 'bg-slate-300', checked: false },
  { value: 'yellow', label: 'bg-[#ffff00]', checked: false },
  { value: 'blue', label: 'bg-blue-900', checked: false },
  { value: 'brown', label: 'bg-amber-900', checked: false },
  { value: 'green', label: 'bg-green-700', checked: false },
  { value: 'purple', label: 'bg-[#800080]', checked: false },
  { value: 'white', label: 'bg-slate-300', checked: false },
  { value: 'yellow', label: 'bg-[#ffff00]', checked: false },
  { value: 'blue', label: 'bg-blue-900', checked: false },
  { value: 'brown', label: 'bg-amber-900', checked: false },
  { value: 'green', label: 'bg-green-700', checked: false },
  { value: 'purple', label: 'bg-[#800080]', checked: false },
  { value: 'white', label: 'bg-slate-300', checked: false },
  { value: 'yellow', label: 'bg-[#ffff00]', checked: false },
  { value: 'blue', label: 'bg-blue-900', checked: false },
  { value: 'brown', label: 'bg-amber-900', checked: false },
  { value: 'green', label: 'bg-green-700', checked: false },
  { value: 'purple', label: 'bg-[#800080]', checked: false },
]

const features = [
  {
    name: 'Minimal and thoughtful',
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Refined details',
    description:
      'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false)
  const [monogramModalVisibility, setMonogramModalVisibility] = useState(false);
  const [monogramStep, setMonogramStep] = useState(1);
  const [monogram, setMonogram] = useState("");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const handleCart = () => setIsHeadlessOpen(true)
  const backMonogram = () => {
    switch (monogramStep) {
      case 1:
        setMonogramModalVisibility(false)
        break
      case 2:
        setMonogramStep(1)
        break
      case 3:
        setMonogramStep(2)
        break
      default:
        setMonogramStep(1)
        break
    }
  }

  const changeStep = () => {
    switch (monogramStep) {
      case 1:
        setMonogramStep(2)
        break
      case 2:
        setMonogramStep(3)
        break
      case 3:
        console.log('done')
        break
      default:
        setMonogramStep(1)
        break
    }
  }
  const monogramBtnText = () => {
    if (monogramStep === 1) {
      return 'Select Color'
    } else if (monogramStep === 2) {
      return 'Select Font'
    } else if (monogramStep === 3) {
      return 'Add Monogram'
    }
  }

  const previousPhoto = () => {
    if (visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    }
  }

  const nextPhoto = () => {
    if (visibleIndex < product.images.length) {
      setVisibleIndex(visibleIndex + 1);
    }
  }

  return (
    <>
      <Head>
        <title>Product-Detail</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />

        {product.images.map((image, key) => (
          <link
            key={key}
            rel="preload"
            href={image.src}
            as="image"
          />
        ))}
      </Head>
      <TopHeader />
      {/* <Script src="magiczoom.js"></Script> */}
      <Layout >
        <div className="bg-yellow">
          <div className="w-full container sm:mx-auto px-4 md:px-6 2xl:px-0 pt-0 sm:pt-14 pb-16 sm:pb-24 flex flex-col sm:flex-row gap-8">
            {/* Image gallery */}

            <Tab.Group
              as="div"
              selectedIndex={visibleIndex}
              onChange={setVisibleIndex}
              className="flex flex-col-reverse w-full sm:w-1/2 relative justify-end"
            >
              {/* Image selector */}
              <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none"></div>
              <div className="z-10 sticky bottom-1">
                <Tab.List className="flex flex-wrap justify-center absolute inset-x-0 bottom-6 gap-4">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white tab-rounded flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 tab-rounded overflow-hidden">
                            <Image
                              src={image.src}
                              width="100"
                              height="100"
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-red-900' : 'ring-transparent',
                              'absolute inset-0 tab-rounded ring-2 ring-offset-2 pointer-events-none',
                            )}
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="relative overflow-hidden w-full">
                <button
                  type="button"
                  className="absolute top-1/2 left-2 md:left-4 rounded-full flex items-center justify-center text-gray-400 z-10"
                  onClick={() => previousPhoto()}
                >
                  <span className="sr-only">prev</span>
                  <i className="pe-7s-left-arrow mix-blend-screen text-black text-3xl"></i>
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-2 md:right-4 rounded-full flex items-center justify-center text-gray-400 z-10"
                  onClick={() => nextPhoto()}
                >
                  <span className="sr-only">next</span>
                  <i className="pe-7s-right-arrow mix-blend-screen text-black text-3xl"></i>
                </button>
                <button
                  type="button"
                  className="absolute top-4 right-4 ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 z-10"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <a className="MagicZoom" id="zoom" title={image.alt} href={image.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width="662px"
                        height="993px"
                        src={image.src}
                        alt={image.alt}
                        layout="responsive"
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                      />
                    </a>
                    {/* <Image
                      width={662}
                      height={993}
                      src={image.src}
                      alt={image.alt}
                      layout="responsive"
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                      priority
                    /> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="sticky top-0 w-full sm:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-wide font-Orpheu">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? 'cusColor'
                            : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-700 "
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <span className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              'h-8 w-8 border border-black border-opacity-10 rounded-full',
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </span>
                  </RadioGroup>
                </div>

                {/* Sizes */}
                <div className="flex flex-col justify-center space-y-2 mt-6">
                  <h3 className="text-sm text-gray-600">Sizes</h3>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <span className="flex items-center space-x-3">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={
                            '-m-0.5 relative p-2 flex items-center justify-center cursor-pointer focus:outline-none rounded-md border ' +
                            classNames(
                              selectedSize.name === size.name
                                ? 'border-gray-700'
                                : 'border-gray-400',
                            )
                          }
                        >
                          <RadioGroup.Label
                            as="span"
                            className={classNames(
                              selectedSize.name === size.name
                                ? 'font-bold'
                                : 'font-light text-gray-400',
                            )}
                          >
                            {size.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </span>
                  </RadioGroup>
                </div>

                <div className="mt-8 flex flex-col">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <Button
                      name="Add to bag"
                      onClick={handleCart}
                      className="flex-1"
                    />
                    <Button
                      name="Add Monogram"
                      onClick={() => setMonogramModalVisibility(true)}
                      className="flex-1"
                      variant="border"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mt-2 md:mt-6 text-gray-600">
                    <span className="text-sm mt-0.5">Share</span>
                    <div className="scale-75">
                      <Facebook />
                    </div>
                    <div className="scale-75">
                      <Pinterest />
                    </div>
                    <div className="scale-75">
                      <Instagram />
                    </div>
                    <div className="scale-75">
                      <Twitter />
                    </div>
                  </div>

                  <Transition
                    appear
                    show={monogramModalVisibility}
                    as={Fragment}
                  >
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={() => setMonogramModalVisibility(false)}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="flex flex-col md:flex-row md:space-x-4 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all w-4/5 md:w-7/12">
                              <div className="bg-maroon text-white flex justify-center items-center flex-1 px-4 py-24 md:p-6">
                                <span className="text-xl">{monogram}</span>
                              </div>
                              <div className="flex-1 p-6">
                                <Dialog.Title
                                  as="h3"
                                  className="text-2xl font-medium leading-6 text-gray-900 font-Orpheu"
                                >
                                  Add a Monogram
                                </Dialog.Title>
                                <div className="py-2 border-t border-b mt-4">
                                  <span className="text-sm text-gray-500 font-Orpheu">
                                    Monogram Price:{' '}
                                    <span className="font-bold text-maroon">
                                      Free
                                    </span>
                                  </span>
                                </div>

                                {monogramStep === 1 && (
                                  <div className="mt-4">
                                    <label htmlFor="monogram">
                                      Type Your Text Here
                                    </label>
                                    <input
                                      type="text"
                                      name="monogram"
                                      id="monogram"
                                      required
                                      value={monogram}
                                      onChange={(val) =>
                                        setMonogram(val.target.value)
                                      }
                                      className="appearance-none min-w-0 w-full bg-transparent border border-gray-400 rounded-md py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 mt-2"
                                    />

                                    <div className="flex justify-end space-x-2 mt-4">
                                      <div
                                        className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer"
                                        onClick={() =>
                                          setMonogram(monogram + '&')
                                        }
                                      >
                                        &amp;
                                      </div>
                                      <div
                                        className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer"
                                        onClick={() =>
                                          setMonogram(monogram + '•')
                                        }
                                      >
                                        •
                                      </div>
                                      <div
                                        className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer"
                                        onClick={() =>
                                          setMonogram(monogram + '❤')
                                        }
                                      >
                                        &#10084;
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {monogramStep === 2 && (
                                  <div className="mt-4">
                                    <h3>SELECT COLOR</h3>
                                    <div className="max-h-28 overflow-y-scroll">
                                      <div className="gap-y-6 gap-x-6 grid grid-cols-5 mt-4">
                                        {monogramColors.map(
                                          (option, optionIdx) => (
                                            <div
                                              key={option.value}
                                              className="flex items-center"
                                              id="colors"
                                            >
                                              <input
                                                id={`filter-colors-${optionIdx}`}
                                                name={`colors[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                // onClick={handleFilter}
                                                defaultChecked={option.checked}
                                                className="filter-property h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 hidden"
                                              />
                                              <label
                                                htmlFor={`filter-colors-${optionIdx}`}
                                                className="text-sm text-gray-600 "
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
                                                    className={`${option.label} filter-colors-${optionIdx} rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-gray-400 hover:outline-offset-2`}
                                                  ></div>
                                                </div>
                                              </label>
                                            </div>
                                          ),
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {monogramStep === 3 && (
                                  <div className="mt-4">
                                    <h3>SELECT FONT</h3>
                                    <div className="max-h-28 overflow-y-scroll">
                                      <table className="w-full border-collapse mt-4">
                                        <tbody>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 01
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 02
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 03
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 04
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 05
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 06
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 01
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 02
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 03
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 04
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 05
                                            </td>
                                            <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">
                                              Font 06
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}

                                <div className="flex space-x-2 mt-4">
                                  {monogramStep > 1 && (
                                    <Button
                                      name="Back"
                                      variant="border"
                                      className="flex-1 uppercase !p-2"
                                      onClick={() => backMonogram()}
                                    />
                                  )}
                                  <Button name={monogramBtnText()} className="flex-1 uppercase" onClick={() => changeStep()} />
                                </div>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>

                  <AddtoBag
                    open={isHeadlessOpen}
                    setOpen={setIsHeadlessOpen}
                    product={{
                      id: 1,
                      name: 'Angled view',
                      src: '/images/product/riverside-blue-cashmere-wrap1.jpg',
                      alt: 'Angled front view with bag zipped and handles upright.',
                      color: 'Salmon',
                      price: '$90.00',
                      quantity: 1,
                      href: '#',
                    }}
                  >
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className="border-gray-300 rounded-md"
                      />
                      OK
                    </div>
                  </AddtoBag>
                </div>

                <div className="flex space-x-4 md:space-x-8 items-center py-8 border-t border-b border-gray-200 mt-8">
                  <div className="flex flex-col h-20 w-20 bg-orange-200/50 rounded-md overflow-hidden">
                    <span className="w-full font-bold bg-maroon text-sm text-white text-center pt-1">
                      DAYS
                    </span>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-5xl font-bold">35</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 md:space-y-0">
                    <span className="font-bold text-xl">
                      Employment Opportunities
                    </span>
                    <span className="font-thin text-sm md:text-base text-gray-800">
                      your purchase provides employment in Nepal
                    </span>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 3xl:px-0 mt-4 lg:col-span-5">
          <Disclosure as="div" className="sm:px-2 py-3 lg:hidden">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <span className="font-medium uppercase">
                      Why we Love it?
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                      <p>
                        Let the class of timeless fabrics amaze you with a
                        handmade Kashmiri Cashmere wrap whose tradition is
                        centuries old. In a serene blue shade, this one goes
                        with all your winter ensembles, however you like to
                        style it. Meticulously handwoven on traditional looms in
                        the Kashmir valley, our Cashmere wraps are a work of
                        wonder. An artisan weaves a single pashmina in a span of
                        three days before it is hand dyed to preserve its
                        softness & warmth. The classic handwoven Cashmere
                        Pashmina in the serene riverside blue will transcend you
                        to a calm picturesque riverside.
                        <br />
                        <br />
                        <ul className="list-disc ml-4">
                          <li>Handwoven in Kashmir</li>
                          <li>100% Grade A Cashmere</li>
                          <li>Guaranteed Authenticity</li>
                          <li>Complimentary Luxury Gift Box</li>
                          <li>Complimentary Worldwide Shipping</li>
                        </ul>
                      </p>

                    </div>
                    <div className="flex-1">
                      <Image
                        src="/images/about-bg.jpg"
                        width={4}
                        height={3}
                        alt=""
                        layout="responsive"
                        loading='lazy'
                        objectFit="contain"
                        className='!w-screen'
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="sm:px-2 py-3 lg:hidden">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <span className="font-medium uppercase">
                      The Exquisite Craftsmanship
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                      <p>
                        A solid Cashmere wrap refers to one which is plain,
                        without any embroidery or special weave - just one
                        colour all over the base. These types of wraps are worn
                        formally or casually. There is no compromise on the
                        quality of these wraps, just that they aren&apos;t
                        embellished, nevertheless perfect for a day to day use.
                        <br />
                        <br />
                        Although the wraps are plain, yet there is difference in
                        the type of weave they host. There are generally three
                        types in which Cashmere is woven.
                        <br />
                        <br />
                        <ul className="list-disc ml-4">
                          <li>
                            <span className="font-bold">
                              Diamond (Chasm-e-bulbul):
                            </span>{' '}
                            Usually Cashmere wraps are woven in the diamond
                            weave because this pattern adds grace to an
                            otherwise plain fabric and makes the solid colour
                            more prominent and vibrant. This type of weave
                            covers the base with tiny lozenge shaped squares,
                            which earns it the name of Chashme Bulbul meaning
                            eye of a Bulbul. Because this weave makes the piece
                            a masterpiece in itself, it is normally left plain
                          </li>
                          <li>
                            <span className="font-bold">Twill weave:</span> If a
                            Cashmere wrap is woven in the twill weave, there are
                            apparent diagonal rib patterns all over the base.
                            This weave is perfect for those wraps which are to
                            be hand embroidered because the base is strong
                            enough to hold the weight of embroidery threads.
                          </li>
                          <li>
                            <span className="font-bold">Basket weave:</span>{' '}
                            When a Cashmere wrap is woven like a basket with
                            warps and wefts intersecting each other in straight
                            lines, the weave is a basket weave.
                          </li>
                        </ul>
                        <br />
                        <br />
                        We as Pashm, hand-weave all our pashminas in classic
                        Diamond Weave.
                      </p>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/images/about-bg.jpg"
                        width={4}
                        height={3}
                        alt=""
                        layout="responsive"
                        objectFit="contain"
                        loading='lazy'
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="sm:px-2 py-3 lg:hidden">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <span className="font-medium uppercase">
                      Guaranteed Quantity
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                      <p>
                        We appreciate that you expect the finest quality of
                        Pashmina from us. So we follow a stringent
                        quality-testing approach on every single piece that we
                        produce. Our Pashminas go through an inflexible testing
                        procedure at the Craft Development Institute (CDI) of
                        Srinagar, the only fully-focused Pashmina lab in India.
                        After testing our Pashminas come with lab reports, fibre
                        tests, name of product and artisan and product life and
                        durability. We guarantee the purity and authenticity of
                        our products.We are 100% sure about our products being
                        handwoven from pure Cashmere yarn.If you are not
                        satisfied with the product, or if it is proven that any
                        of our claims are false, you can easily return it to us
                        with a full refund.
                      </p>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/images/about-bg.jpg"
                        width={4}
                        height={3}
                        alt=""
                        layout="responsive"
                        objectFit="contain"
                        loading='lazy'
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="sm:px-2 py-3 lg:hidden">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <span className="font-medium uppercase">
                      Fair Trade &amp; Sustainable
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                      <p>
                        In the modern era where fast fashion has become a
                        whirring concept, people have compromised with low
                        quality, instant production, and accepted degradation
                        that it causes to the environment. To lower the harmful
                        impact of fast fashion fads on the planet, Pashmina.com
                        produces environment friendly, sustainable wraps that
                        last for generations. Our products are made from natural
                        Cashmere fibre, dyed with nontoxic dyes and use water
                        conservation methods for the final wash. In addition to
                        taking care of the environment, Pashmina.com makes sure
                        that products are handcrafted by artisans who use
                        traditional artisan skills and organic Cashmere yarn to
                        produce ethereal pieces. As a mark of honour and a token
                        of gratitude, we donate 5% of our proceeds to the
                        artisan community to improve their livelihood and
                        standards of living.
                      </p>
                    </div>
                    <div className="flex-1">
                      <Image
                        src="/images/about-bg.jpg"
                        width={4}
                        height={3}
                        alt=""
                        layout="responsive"
                        objectFit="contain"
                        loading='lazy'
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="sm:px-2 py-3 lg:hidden">
            {({ open }) => (
              <>
                <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold  uppercase ">
                  <Disclosure.Button className="w-full flex items-center justify-between ">
                    <span className="font-medium uppercase">
                      Customer Reviews
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div className="container mx-auto flex flex-col mt-4 mb-14">
                    <h2 className="font-Orpheu text-4xl">Write Your Own Review</h2>
                    <p className="text-lg">
                      You&apos;re reviewing : Riverside Blue Cashmere Wrap | Pure
                      Pashmina
                    </p>
                    <div className="flex-1 grid md:grid-cols-2 gap-6 mt-6">
                      <div className="flex flex-col space-y-4">
                        <div className="">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              autoComplete="email"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="summary"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Summary
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              id="summary"
                              name="summary"
                              autoComplete="email"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row-span-2">
                        <label
                          htmlFor="review"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Review
                        </label>
                        <div className="mt-1">
                          <textarea
                            type="text"
                            id="review"
                            name="review"
                            rows={5}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button type="submit" name="Submit Review" className="mt-4" />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Status screen="mobile" />

          <Tab.Group as="div" className="hidden lg:block">
            <div className="border-b border-gray-200 overflow-hidden">
              <Tab.List className="flex overflow-x-scroll hidden-scrollbar justify-items-stretch">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-red-900 cusColor'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                    )
                  }
                >
                  Why we Love it?
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-red-900 cusColor'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                    )
                  }
                >
                  The Exquisite Craftsmanship
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-red-900 cusColor'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                    )
                  }
                >
                  Guaranteed Quantity
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-red-900 cusColor'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                    )
                  }
                >
                  Fair Trade &amp; Sustainable
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? 'border-red-900 cusColor'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'flex-1 whitespace-nowrap px-6 py-4 border-b-2 font-medium text-lg outline-none',
                    )
                  }
                >
                  Customer Reviews
                </Tab>
              </Tab.List>
            </div>
            <Tab.Panels as={Fragment}>
              <Tab.Panel className="flex space-y-8 md:space-y-0 space-x-8 py-4">
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div className="flex-1">
                    <p>
                      Let the class of timeless fabrics amaze you with a
                      handmade Kashmiri Cashmere wrap whose tradition is
                      centuries old. In a serene blue shade, this one goes with
                      all your winter ensembles, however you like to style it.
                      Meticulously handwoven on traditional looms in the Kashmir
                      valley, our Cashmere wraps are a work of wonder. An
                      artisan weaves a single pashmina in a span of three days
                      before it is hand dyed to preserve its softness & warmth.
                      The classic handwoven Cashmere Pashmina in the serene
                      riverside blue will transcend you to a calm picturesque
                      riverside.
                      <br />
                      <br />
                      <ul className="list-disc ml-4">
                        <li>Handwoven in Kashmir</li>
                        <li>100% Grade A Cashmere</li>
                        <li>Guaranteed Authenticity</li>
                        <li>Complimentary Luxury Gift Box</li>
                        <li>Complimentary Worldwide Shipping</li>
                      </ul>
                    </p>
                    <Status screen="desktop" />
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/images/about-bg.jpg"
                      width={4}
                      height={3}
                      alt=""
                      layout="responsive"
                      objectFit="contain"
                      loading='lazy'
                    />
                  </div>
                </div>

              </Tab.Panel>
              <Tab.Panel className="flex space-y-8 md:space-y-0 space-x-8 py-4">
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div className="flex-1">
                    <p>
                      A solid Cashmere wrap refers to one which is plain,
                      without any embroidery or special weave - just one colour
                      all over the base. These types of wraps are worn formally
                      or casually. There is no compromise on the quality of
                      these wraps, just that they aren&apos;t embellished,
                      nevertheless perfect for a day to day use.
                      <br />
                      <br />
                      Although the wraps are plain, yet there is difference in
                      the type of weave they host. There are generally three
                      types in which Cashmere is woven.
                      <br />
                      <br />
                      <ul className="list-disc ml-4">
                        <li>
                          <span className="font-bold">
                            Diamond (Chasm-e-bulbul):
                          </span>{' '}
                          Usually Cashmere wraps are woven in the diamond weave
                          because this pattern adds grace to an otherwise plain
                          fabric and makes the solid colour more prominent and
                          vibrant. This type of weave covers the base with tiny
                          lozenge shaped squares, which earns it the name of
                          Chashme Bulbul meaning eye of a Bulbul. Because this
                          weave makes the piece a masterpiece in itself, it is
                          normally left plain
                        </li>
                        <li>
                          <span className="font-bold">Twill weave:</span> If a
                          Cashmere wrap is woven in the twill weave, there are
                          apparent diagonal rib patterns all over the base. This
                          weave is perfect for those wraps which are to be hand
                          embroidered because the base is strong enough to hold
                          the weight of embroidery threads.
                        </li>
                        <li>
                          <span className="font-bold">Basket weave:</span> When
                          a Cashmere wrap is woven like a basket with warps and
                          wefts intersecting each other in straight lines, the
                          weave is a basket weave.
                        </li>
                      </ul>
                      <br />
                      <br />
                      We as Pashm, hand-weave all our pashminas in classic
                      Diamond Weave.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/images/about-bg.jpg"
                      width={4}
                      height={3}
                      alt=""
                      layout="responsive"
                      objectFit="contain"
                      loading='lazy'
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex space-y-8 md:space-y-0 space-x-8 py-4">
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div className="flex-1">
                    <p>
                      We appreciate that you expect the finest quality of
                      Pashmina from us. So we follow a stringent quality-testing
                      approach on every single piece that we produce. Our
                      Pashminas go through an inflexible testing procedure at
                      the Craft Development Institute (CDI) of Srinagar, the
                      only fully-focused Pashmina lab in India. After testing
                      our Pashminas come with lab reports, fibre tests, name of
                      product and artisan and product life and durability. We
                      guarantee the purity and authenticity of our products.We
                      are 100% sure about our products being handwoven from pure
                      Cashmere yarn.If you are not satisfied with the product,
                      or if it is proven that any of our claims are false, you
                      can easily return it to us with a full refund.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/images/about-bg.jpg"
                      width={4}
                      height={3}
                      alt=""
                      layout="responsive"
                      objectFit="contain"
                      loading='lazy'
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex space-y-8 md:space-y-0 space-x-8 py-4">
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div className="flex-1">
                    <p>
                      In the modern era where fast fashion has become a whirring
                      concept, people have compromised with low quality, instant
                      production, and accepted degradation that it causes to the
                      environment. To lower the harmful impact of fast fashion
                      fads on the planet, Pashmina.com produces environment
                      friendly, sustainable wraps that last for generations. Our
                      products are made from natural Cashmere fibre, dyed with
                      nontoxic dyes and use water conservation methods for the
                      final wash. In addition to taking care of the environment,
                      Pashmina.com makes sure that products are handcrafted by
                      artisans who use traditional artisan skills and organic
                      Cashmere yarn to produce ethereal pieces. As a mark of
                      honour and a token of gratitude, we donate 5% of our
                      proceeds to the artisan community to improve their
                      livelihood and standards of living.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src="/images/about-bg.jpg"
                      width={4}
                      height={3}
                      alt=""
                      layout="responsive"
                      objectFit="contain"
                      loading='lazy'
                    />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="flex space-y-8 md:space-y-0 space-x-8 py-4">
                <div className="container mx-auto flex flex-col mt-4 mb-14">
                  <h2 className="font-Orpheu text-4xl">Write Your Own Review</h2>
                  <p className="text-lg">
                    You&apos;re reviewing : Riverside Blue Cashmere Wrap | Pure
                    Pashmina
                  </p>
                  <div className="flex-1 grid md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="summary"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Summary
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="summary"
                            name="summary"
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row-span-2">
                      <label
                        htmlFor="review"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Review
                      </label>
                      <div className="mt-1">
                        <textarea
                          type="text"
                          id="review"
                          name="review"
                          rows={5}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-maroon focus:border-maroon sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button type="submit" name="Submit Review" className="mt-4" />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="bg-white">
          <div className="container mx-auto px-4 md:px-6 3xl:px-0 mt-8 mb-14">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Protect your device</h2>
              <p className="mt-4 text-gray-500">
                As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
                fabric sleeve that matches in quality and looks.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {features.map((feature, featureIdx) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                >
                  <div
                    className={classNames(
                      featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                      'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                    )}
                  >
                    <h3 className="text-4xl font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-gray-500">{feature.description}</p>
                  </div>
                  <div
                    className={classNames(
                      featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                      'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                    )}
                  >
                    <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                      <Image src={feature.imageSrc} alt={feature.imageAlt} width={250} height={100} layout="responsive" className="object-center object-cover" loading='lazy' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-yellow overflow-hidden">
          <div className="relative container mx-auto py-8 md:py-16 px-4 md:px-6 2xl:px-0">
            <div className="hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-14">
              <div className="flex-1 relative lg:row-start-1 lg:col-start-2">
                <Image
                  className="rounded-lg shadow-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                  alt="Whitney leaning against a railing on a downtown street"
                  width={200}
                  height={200}
                  layout="responsive"
                  loading='lazy'
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-center">
                <h2 className="text-xs md:text-sm text-black font-semibold tracking-wide uppercase">
                  ABOUT
                </h2>
                <h1 className="text-3xl md:text-4xl tracking-tight font-Orpheu mt-1">
                  Home Sanctuary
                </h1>
                <p className="text-base md:text-lg leading-tight cusColor mt-2 md:mt-4 mb-6">
                  The Spring Summer 21&apos; Collection is an answer to the
                  real-world situation. Instead of escaping far away, we find
                  inspiration from the local treasures around us, resulting in a
                  collection of relaxed silhouettes and a calm, soothing color
                  palette.
                </p>
                <a
                  href="#"
                  className="text-sm md:text-base self-center px-4 py-3 font-medium rounded-md shadow-sm bg-maroon text-white"
                >
                  Shop Women
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center font-Orpheu text-4xl mt-12">
          Related Products
        </h2>
        <div className="py-4">
          <div className="w-28 mx-auto border-2 border-red-900"></div>
        </div>
        <Slider />

        <Faq />
      </Layout>
    </>
  )
}
