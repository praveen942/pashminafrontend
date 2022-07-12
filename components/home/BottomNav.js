import Cart from '../Navigation/Cart'
import HeadlessSlideOver from '../category/HeadlessSlideOver'
import Image from 'next/image'
import Link from 'next/link'
import LogIn from '../Navigation/LogIn'
import Search from '../Navigation/Search'
import WishList from '../Navigation/WishList'
import { useState } from 'react'

const navbar = [
  {
    src: '/images/search.png',
    href: '/#search',
    title: '',
  },
  {
    src: '/images/user.png',
    href: '/sign-in',
    title: '',
  },
  {
    src: '/images/wishlist.png',
    href: '/wishlist',
    title: '',
  },
  {
    src: '/images/cart.png',
    href: '/shopping-cart',
    title: '',
  },
]
const Botnav = () => {
  const [openId, setOpenId] = useState(0)
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false)
  const handleOnClose = (id) => {
    setOpenId(id)
    setIsHeadlessOpen(true)
  }

  return (
    <div className="w-full sm:hidden">
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-maroon shadow"
      >
        <div id="tabs" className="flex justify-around text-white font-bold text-xl">
          <Link href="/" prefetch={false}>
            <div className="flex items-center cursor-pointer p-3">
              <Image
                src="/images/home.svg"
                width="20"
                height="20"
                alt="arrow"
                loading='lazy'
              />
            </div>
          </Link>
          <div
            className="flex items-center cursor-pointer p-3"
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
            className="flex items-center cursor-pointer p-3"
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
            className="flex items-center cursor-pointer p-3"
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
            className="flex items-center cursor-pointer p-3"
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
              current="Search"
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
              current="Log In"
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
              current="Wish List"
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
              current="Cart"
            >
              <div className="flex flex-col">
                <Cart />
              </div>
            </HeadlessSlideOver>
          )}
        </div>
      </section>
    </div>
  )
}
export default Botnav
