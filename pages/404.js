import 'swiper/css/bundle'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/Layout'
import React from 'react'
import Link from 'next/link'
import TopHeader from '../components/TopHeader'
export default function Custom404() {
    return (
        <div >
      <Head>
        <title>404 Not found</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/category-page-header.webp" as="image" />
      </Head>
      <TopHeader />
      <Layout>
      <div className="container mx-auto px-4 md:px-6 xl:px-0">
        <div className="text-center">
        <h2 className="text-center font-Orpheu text-4xl pt-20 font-semibold tracking-wide">Something’s gone wrong, but we’re so pleased you’re here.</h2>
        <br/>
        <p className="tracking-wide font-medium text-lg mb-3">If you were on a hunt to find pure, luxurious, handcrafted Pashmina shawls, Cashmere wraps, and scarves then you are close to the destination.</p>
        <span className="underline underline-offset-4 font-bold text-lg tracking-widest "><Link href="/" >Click here </Link></span><span className="tracking-wide font-medium text-lg ">to indulge in a rich edition of our latest Luxury Collection.</span>
        </div>
        <div className="grid grid-cols-1 gap-y-10  gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-10">
        <Link href="/productdetails">
        <div className="p-4 tracking-wide font-medium cursor-pointer ">
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src="https://d3nkveufi3gdxh.cloudfront.net/amasty/webp/wysiwyg/404-shawls_jpg.webp"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>

        <h2 className="text-center font-Orpheut text-xl font-medium mt-3">Pashmina Shawls</h2>
        <p className="text-center">Discover the finest Pashmina shawls from the Treasure Trove of Kashmir Valley. Luxury assortment of Pashmina shawls in solids, prints, patterns, embroideries and Kani weaves in breath-taking designs and colours.</p>

        </div>
        </Link>
        <Link href="/productdetails">
        <div className="p-4 tracking-wide font-medium cursor-pointer ">

        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src="https://d3nkveufi3gdxh.cloudfront.net/amasty/webp/wysiwyg/404-wraps_jpg.webp"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>

        <h2 className="text-center font-Orpheut text-xl font-medium mt-3">Pashmina Shawls</h2>
        <p className="text-center">Discover the finest Pashmina shawls from the Treasure Trove of Kashmir Valley. Luxury assortment of Pashmina shawls in solids, prints, patterns, embroideries and Kani weaves in breath-taking designs and colours.</p>

        </div>
        </Link>
        <Link href="/productdetails">
        <div className="p-4 tracking-wide font-medium cursor-pointer ">

        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src="https://d3nkveufi3gdxh.cloudfront.net/amasty/webp/wysiwyg/404-scarves_jpg.webp"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>

        <h2 className="text-center font-Orpheut text-xl font-medium mt-3">Pashmina Shawls</h2>
        <p className="text-center">Discover the finest Pashmina shawls from the Treasure Trove of Kashmir Valley. Luxury assortment of Pashmina shawls in solids, prints, patterns, embroideries and Kani weaves in breath-taking designs and colours.</p>

        </div>
        </Link>

</div>
        <div className="text-center">
        <h3 className="text-center font-Orpheu text-3xl  font-medium tracking-wid">May we help?</h3>
        <p className="tracking-wide font-medium text-lg mt-2">Please call <span className="underline underline-offset-4 font-bold text-lg tracking-widest "><a href="tel:+91 9555551122">+91 9555551122</a></span>&nbsp;during store opening hours, or email us at <span className="underline underline-offset-4 font-bold text-lg tracking-widest "><a href="mailto:contact@pashmina.com">hello@pashmina.com</a></span>.<br/><span className="additional">If you’d like more information...</span></p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2 text-center md:mx-auto gap-x-6 gap-y-6 mt-8 mb-40 mx-4 ">
       <div  className="border border-maroon p-1 hover:bg-maroon hover:text-white"> <Link href="/">Check our terms of delivery</Link></div>
       <div className="border border-maroon p-1 hover:bg-maroon hover:text-white"> <Link href="/">Read our return Policy</Link></div>
       <div className="border border-maroon p-1 hover:bg-maroon hover:text-white"> <Link href="/">contact us</Link></div>
       <div className="border border-maroon p-1 hover:bg-maroon hover:text-white"> <Link href="/">Browse our FAQS</Link></div>
        </div>
        </div>
      </Layout>
    </div>
    )
  }