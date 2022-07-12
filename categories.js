import 'swiper/css/bundle'

import Banner from '../components/Banner'
import Breadcrumb from './components/Navigation/Breadcrumb'
import Detail from '../components/productdetails/Detail'
import Faq from '../components/home/Faq'
import Filter from '../components/category/Filter'
import Head from 'next/head'
import { HomeIcon } from '@heroicons/react/solid'
import Layout from '../components/Layout'
import React from 'react'
import Slider from '../components/category/Slider'

const categories = () => {
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ]
  return (
    <div >
      <Head>
        <title>Pashmina</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-rose-50 text-center text-base py-2.5  cusColor">
        Summer Sale : Up to 60% off
      </section>
      <Layout>
        <div className="h-96 bg-[url('/images/categorybanner.png')] bg-cover justify-center flex flex-col"></div>

        <Breadcrumb pages={pages} />

        <nav className="text-gray-900 flex " aria-label="Breadcrumb">
          <ol
            role="list"
            className="container mx-auto w-full flex space-x-4 my-4 px-4 md:px-0"
          >
            <li className="flex">
              <div className="flex items-center">
                <a href="#">
                  <HomeIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                  <span className="sr-only text-lg">Home</span>
                </a>
              </div>
            </li>

            {pages.map((page) => (
              <li key={page.name} className="flex">
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-2 h-4 lg:w-2 lg:h-4 md:w-2 md:h-4 text-gray-900"
                    viewBox="0 0 24 44"
                    preserveAspectRatio="none"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-4 text-sm md:text-base font-medium"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <Banner />
        <Filter />
        <section className="py-12 bg-rose-50 overflow-hidden md:py-20 lg:py-16 content-auto mt-10 ">
          <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className=" text-center font-Orpheu text-4xl md:text-[40px] 2xl:text-5xl">
              Woman Fashion
            </h1>
            <div className="py-4">
              <div className="w-28 mx-auto border-2 border-red-900"></div>
            </div>
            <p className="text-center mt-6 text-lg ">
              Welcome to our fashion store, with no limit of space and offering
              sales all year. Discover the latest fashion trends in dresses,
              knitwear, outerwear, pants, t-shirts, jackets and skirts. New
              winter or summer collection: there is no season to indulge
              yourself.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <h1 className=" text-center font-Orpheu text-4xl md:text-{40} 2xl:text-5xl">
            New arrivals
          </h1>
          <div className="pt-4">
            <div className="w-28 mx-auto border-2 border-red-900"></div>
          </div>
        </div>

        <Detail />
        <Slider />
        <Faq />
      </Layout>
    </div>
  )
}

export default categories
