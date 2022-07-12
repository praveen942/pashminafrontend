import 'swiper/css/bundle'

import Banner from '../components/Banner'
import Breadcrumb from '../components/Navigation/Breadcrumb'
import Detail from '../components/productdetails/Detail'
import Faq from '../components/home/Faq'
import Filter from '../components/category/Filter'
import Head from 'next/head'
import Layout from '../components/Layout'
import React from 'react'
import Slider from '../components/category/Slider'
import TopHeader from '../components/TopHeader'

const categories = () => {
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ]
  return (
    <div >
      <Head>
        <title>Product-List</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/category-page-header.webp" as="image" />
      </Head>
      <TopHeader />
      <Layout>
        <div className="h-96 bg-[url('/images/category-page-header.webp')] bg-cover bg-center flex flex-col items-center px-4 md:px-0">
          <div className='flex-1 flex flex-col items-center justify-center text-white text-center max-w-md'>
            <h1 className='font-Orpheu text-2xl md:text-4xl'>Solid Pashmina</h1>
            <p className='text-sm md:text-base mt-2'>
              Invest in a premium quality of authentic Kashmiri Pashminas, for this winter and beyond, with a collection where every single piece comes handwoven from the classic wooden Kashmiri handloom. Solid Pashmina shawls, solid Cashmere scarves and solid Pashmina hijabs, in more than 50 colours, crafted in utmost finesse is what this luxury collection of ethically produced planet friendly beauties is all about.
            </p>
          </div>
        </div>
        <Breadcrumb pages={pages} />
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

        <div className="container mx-auto px-4 md:px-6 3xl:px-0 pt-14">
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
