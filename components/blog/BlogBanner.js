import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
const BlogBanner = () => {
  return (
    <div className="container mx-auto mt-5 relative md:h-[65vh] h-[50vh]">
      <div className="absolute  inset-0">
        <div className="relative">
          <div className="relative w-full md:h-[65vh] h-[50vh]">
            <Image
              className="w-full h-full object-cover"
              src="/images/blog/blogbanner.webp"
              alt=""
              layout="fill"
              priority
            />
          </div>
          <div className="bg-black  text-white opacity-70 items-start absolute top-0 right-0 md:w-1/2 lg:w-1/3 w-full md:h-[65vh] h-[50vh] flex flex-col px-4 ">
            <div className="xl:mx-10 mx-auto md:mt-20 mt-12">
              <h1 className=" font-semibold hidden sm:block text-4xl ">
                Why is Pashmina  Expensive ?
              </h1>
              <h1 className=" font-semibold sm:hidden text-4xl ">
                Why is Pashmina
                <br /> Expensive ?
              </h1>
              <p className="mt-2 text-sm max-w-3xl">80
                Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
                lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
                consectetur.
              </p>
              <button className="border-white border-2 uppercase px-2 mt-5 ">read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogBanner
