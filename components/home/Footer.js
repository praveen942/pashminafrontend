import Image from 'next/image'
import Mobfooter from './Mobfooter'
import SocialIcons from './SocialIcons'

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
  support: [
    { name: 'Pashmina Shawls', href: '#' },
    { name: 'Cashmere Wraps', href: '#' },
    { name: 'Cashmere Scarves', href: '#' },
    { name: 'Pashmina Hijab', href: '#' },
  ],
  company: [
    { name: 'Our Story', href: '#' },
    { name: 'What is Pashmina', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  legal: [
    { name: 'Contact Us', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Worldwide Shipping', href: '#' },
    { name: 'Return & Exchanges', href: '#' },
    { name: 'Blog', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-maroon" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto py-12 px-4 md:px-6 2xl:px-0 lg:py-16">
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8 hidden sm:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:col-span-4">
            <div className="md:grid lg:grid-cols-2 md:grid-cols-2 md:gap-8 ">
              <div>
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
                        className="flex text-lg font-light text-white hover:text-white items-start"
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
              <div className="mt-12 md:mt-0">
                <h3 className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 text-2xl  md:text-2xl lg:text-lg xl:text-2xl whitespace-nowrap font-semibold text-white tracking-wider uppercase pt-0 xl:pt-4">
                  Handmade Luxury
                </h3>
                <ul role="list" className="mt-2 md:mt-10 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-lg font-light text-white hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-10  lg:mt-0 xl:mt-0 md:grid lg:grid-cols-2 grid-cols-2 md:grid-cols-2 md:gap-8">
              <div>
                <h3 className=" text-2xl  md:text-2xl lg:text-lg xl:text-2xl whitespace-nowrap font-semibold text-white tracking-wider uppercase pt-0 xl:pt-4">
                  About Pashmina.com
                </h3>
                <ul role="list" className="mt-7 md:mt-10 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-lg  font-light text-white hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 md:mt-0">
                <h3 className="mt-10  md:mt-0 lg:mt-0 xl:mt-0 text-2xl  md:text-2xl lg:text-lg xl:text-2xl whitespace-nowrap font-semibold text-white tracking-wider uppercase pt-0 xl:pt-4">
                  Help & Information
                </h3>
                <ul role="list" className="mt-2 md:mt-10 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-lg  font-light text-white hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <Mobfooter />
        </div>

        <div className="border-t border-white  lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="mt-10  text-2xl  md:text-2xl lg:text-lg xl:text-2xl  font-semibold text-white tracking-wider uppercase ">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-lg  font-light text-white">
              Subscribe our newsletter to get latest news about our new products
              and promos campaign.
            </p>
          </div>
          <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none min-w-0 w-full bg-transparent border border-white rounded-md py-2 px-4 text-base text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full bg-white uppercase border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium cusColor  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2 footer_only">
            <SocialIcons iconColors="white" />
          </div>
          <p className="mt-8 text-lg  text-white md:mt-0 md:order-1">
            Copyright &copy; 2020 Pashmina.com.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
