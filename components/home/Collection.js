import Image from 'next/image'
import Link from "next/link"
import React from 'react'
const images = ['/images/embroidered-pashmina.png', '/images/kani-pashmina.png']
const Collection = () => {
  return (
    <div className="2xl:container 2xl:mx-auto relative px-4  sm:px-6 mt-16 sm:mb-8 lg:px-8">
      <h2 className="text-center font-Orpheu text-4xl md:text-{40} 2xl:text-5xl">
        The Privée Collection
      </h2>
      <div className="py-4">
        <div className="w-28 mx-auto border-2 border-red-900"></div>
      </div>
      <p className="text-center mt-6 mb-12 text-lg max-w-7xl mx-auto">
        Signature Kanis and hand-embroidered Pashmina shawls, scarves, and wraps
        have left their mark amongst the elite ever since they were first made
        in the 14th century. The Kani is an elegy within Pashmina and is
        handcrafted out of little bobbins, each carrying a thread of different
        colors. While one set of artisans draws inspiration from the picturesque
        nature enveloping the valley and writes a Taalim for the shawl, another
        group reads this script like a Holy Book and weaves the luxury shawl
        accordingly. In a parallel world, Pashminas meet flamboyant hand
        embroideries such as Sozni Kari, Tilla Dozi, and Papier Mache, each of
        ornate the luxe shawl, sitting across its soft folds like a prized
        jewel.
      </p>
      <div className="relative md:bg-white">
        <div className=" flex flex-col md:flex-row md:max-w-[90%] mx-auto gap-8">
          {images.map((img) => (
            <div
              className="prose prose-indigo prose-lg  lg:max-w-none move-left  sm:w-1/2"
              key={img}
            >
              <Link href="/productdetails" prefetch={false}>
                <div className="group w-full flex flex-col space-y-2 cursor-pointer">
                  <Image
                    src={img}
                    alt=""
                    className="hover:scale-110 duration-500 object-cover w-full outline-1 outline outline-offset-[-15px] yellow-boder mb-8"
                    width="900"
                    height="650"
                    loading='lazy'
                  />
                  <div className="flex items-center text-xl md:text-2xl font-medium font-Orpheu relative">
                    <span className="leading-10 mr-2">Embroidered Pashmina</span>
                    <Image
                      src="/images/arrow.png"
                      width="20"
                      height="20"
                      objectFit="contain"
                      className="group-hover:ml-4 duration-300"
                      alt="arrow"
                      loading='lazy'
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 inline-flex rounded-md shadow"></div>
      </div>
    </div>
  )
}
export default Collection
