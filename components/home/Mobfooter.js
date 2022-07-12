import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

import { Disclosure } from '@headlessui/react'
import Image from 'next/image'

const navigation = {
  solutions: [
    {
      name: 'Pashmina.com LLP New Delhi, India',
      href: '#',
      src: '/images/Footer/location.png',
      width: '24px',
      height: '28px',
      class: 'ml-2.5 w-40 ',
    },

    {
      name: 'hello@pashmina.com',
      href: '#',
      src: '/images/Footer/mail.png',
      width: '28px',
      height: '20px',
      class: 'ml-2.5 pt-1.5 lg:pt-0',
    },
    {
      name: '+91 9555551122',
      href: '#',
      src: '/images/Footer/call.png',
      width: '26px',
      height: '26px',
      class: 'ml-2.5 pt-1.5 lg:pt-0',
    },
  ],
}
const filters = [
  {
    id: 'handmade-luxury',
    name: 'Handmade Luxury',
    options: [
      { name: 'Pashmina Shawls', href: '#' },
      { name: 'Cashmere Wraps', href: '#' },
      { name: 'Cashmere Scarves', href: '#' },
      { name: 'Pashmina Hijab', href: '#' },
    ],
  },
  {
    id: 'about',
    name: 'About Pashmina.com',
    options: [
      { name: 'Our Story', href: '#' },
      { name: 'What is Pashmina', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    id: 'help-information',
    name: 'Help & Information',
    options: [
      { name: 'Contact Us', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'Worldwide Shipping', href: '#' },
      { name: 'Return & Exchanges', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
]

export default function Mobfooter() {
  return (
    <div className="mt-4 border-gray-200">
      <div className="mb-6">
        <Image
          src="/images/footer-logo.png"
          width="249"
          height="47"
          alt="footer-logo"
          loading='lazy'
        />
        <ul role="list" className="mt-4 md:mt-6 lg:mt-10 space-y-4">
          {navigation.solutions.map((item) => (
            <li key={item.name} className="">
              <a
                href={item.href}
                className="flex text-lg  font-light text-white hover:text-white items-start"
              >
                <div className="w-4 h-4 lg:w-6 lg:h-6 relative mt-1 lg:mt-0 top-1">
                  <Image
                    src={item.src}
                    layout="fill"
                    objectFit="contain"
                    alt="icon"
                    className=""
                    loading='lazy'
                  />
                </div>
                <h3 className={item.class}> {item.name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-t border-gray-200 sm:px-2 py-3"
        >
          {({ open }) => (
            <>
              <h3 className="text-base whitespace-normal sm:text-2xl  font-semibold text-white uppercase ">
                <Disclosure.Button className="w-full flex items-center justify-between ">
                  <span className="font-medium uppercase">{section.name}</span>
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
                <ul className="space-y-6">
                  {section.options.map((option, optionIdx) => (
                    <li key={option.value} className="flex items-center">
                      <a
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="text-lg  font-light text-white hover:text-white"
                      >
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
