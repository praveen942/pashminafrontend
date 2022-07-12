import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import Button from '../Button'
import Image from 'next/image'
import Quantity from '../Quantity'

const _productDetails = {
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    {
      name: 'Heather Grey',
      bgColor: 'bg-gray-400',
      selectedColor: 'ring-gray-400',
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
  quantity: 1
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
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ product }) {
  const [selectedColor, setSelectedColor] = useState(_productDetails.colors[0])
  const [selectedSize, setSelectedSize] = useState(_productDetails.sizes[1])
  const [monogramModalVisibility, setMonogramModalVisibility] = useState(false);
  const [monogramStep, setMonogramStep] = useState(1);
  const [monogram, setMonogram] = useState("");
  const [productDetails, setProductDetails] = useState(_productDetails)

  const backMonogram = () => {
    switch (monogramStep) {
      case 1:
        setMonogramModalVisibility(false);
        break;
      case 2:
        setMonogramStep(1);
        break;
      case 3:
        setMonogramStep(2);
        break;
      default:
        setMonogramStep(1);
        break;
    }
  }

  const changeStep = () => {
    ;
    switch (monogramStep) {
      case 1:
        setMonogramStep(2);
        break;
      case 2:
        setMonogramStep(3);
        break;
      case 3:
        console.log('done');
        break;
      default:
        setMonogramStep(1);
        break;
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

  const handlePlus = () => {
    setProductDetails({ ...productDetails, quantity: productDetails.quantity + 1 })
  }
  const handleMinus = () => {
    if (productDetails.quantity > 1) {
      setProductDetails({ ...productDetails, quantity: productDetails.quantity - 1 })
    }
  }

  return (
    <div className="relative mt-6 flex-1 px-4 sm:px-6">
      <form>
        <div className="flex space-x-4">
          <div className='w-36'>
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={80}
              height={120}
              layout="responsive"
              objectFit="contain"
              loading='lazy'
            />
          </div>
          <div className="flex flex-col">
            <h3 className='float-left line-clamp-2 text-lg whitespace-normal font-Orpheu'>{product.name}</h3>
            <p className='float-left text-base whitespace-normal'>₹ {product.price}</p>
            <p className="text-gray-500">{product.description}</p>

            <h2 className="text-sm font-medium text-gray-900 mt-2">Color Choices</h2>

            <RadioGroup
              value={selectedColor}
              onChange={setSelectedColor}
              className="mt-1"
            >
              <RadioGroup.Label className="sr-only">
                Choose a color
              </RadioGroup.Label>
              <div className="flex items-center space-x-3">
                {productDetails.colors.map((color) => (
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
              </div>
            </RadioGroup>

            <h3 className="text-sm font-medium text-gray-900 mt-2">Sizes</h3>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-2"
            >
              <RadioGroup.Label className="sr-only">
                Choose a size
              </RadioGroup.Label>
              <span className="flex items-center space-x-3">
                {productDetails.sizes.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    className={"-m-0.5 relative p-1 md:p-2 flex items-center justify-center cursor-pointer focus:outline-none rounded-md border " + classNames(
                      selectedSize.name === size.name ? 'border-gray-700' : 'border-gray-400'
                    )}
                  >
                    <RadioGroup.Label as="span" className={classNames(
                      selectedSize.name === size.name ? 'font-bold text-xs' : 'font-light text-gray-400 text-xs'
                    )}>
                      {size.name}
                    </RadioGroup.Label>
                  </RadioGroup.Option>
                ))}
              </span>
            </RadioGroup>

            <div className="flex mt-4">
              <Quantity quantity={productDetails.quantity} decrement={() => handleMinus()} increment={() => handlePlus()} />
            </div>
          </div>
        </div>

        <div className="flex space-x-8 items-center px-6 py-4 border-b border-t border-gray-200 mt-8">
          <div className="flex flex-col h-16 w-16 bg-orange-200/50 rounded-md overflow-hidden">
            <span className="w-full font-bold bg-maroon text-xs text-white text-center pt-1">DAYS</span>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-4xl font-bold">35</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Employment Opportunities</span>
            <span className="font-thin text-sm text-gray-800">your purchase provides employment in Nepal</span>
          </div>
        </div>

        <Button type="submit" name="Add to Cart" className="w-full mt-6" />
        <Button type="submit" name="Add Monogram" className="w-full mt-2" variant="border" onClick={() => setMonogramModalVisibility(true)} />

        <Transition appear show={monogramModalVisibility} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={() => setMonogramModalVisibility(false)}>
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
                  <Dialog.Panel className="flex flex-col md:flex-row md:space-x-4 transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all w-4/5 md:w-1/2">
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
                      <div className='py-2 border-t border-b mt-4'>
                        <span className="text-sm text-gray-500 font-Orpheu">
                          Monogram Price: <span className="font-bold text-maroon">Free</span>
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
                            onChange={val => setMonogram(val.target.value)}
                            className="appearance-none min-w-0 w-full bg-transparent border border-gray-400 rounded-md py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs mt-2"
                          />

                          <div className='flex justify-end space-x-2 mt-4'>
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer" onClick={() => setMonogram(monogram + '&')}>
                              &amp;
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer" onClick={() => setMonogram(monogram + '•')}>
                              •
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded cursor-pointer" onClick={() => setMonogram(monogram + '❤')}>
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
                              {monogramColors.map((option, optionIdx) => (
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
                              ))}
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
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 01</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 02</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 03</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 04</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 05</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 06</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 01</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 02</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 03</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 04</td>
                                </tr>
                                <tr>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 05</td>
                                  <td className="border border-gray-400 p-2 text-center cursor-pointer hover:bg-gray-50">Font 06</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-2 mt-4">
                        {monogramStep > 1 && (<Button name="Back" variant="border" className="flex-1 uppercase !p-2" onClick={() => backMonogram()} />)}
                        <Button name={monogramBtnText()} className="flex-1 uppercase" onClick={() => changeStep()} />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </form>
    </div>
  )
}
