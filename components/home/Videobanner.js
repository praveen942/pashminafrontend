import Image from 'next/image'
import React from 'react'
const Videobanner = () => {
  return (
    <div className="relative ">
      <section className="md:py-vw-1/8 md:px-12 flex-col-reverse h-[81vh] md:h-[22rem] lg:h-[30rem] xl:h-[45rem] relative flex justify-center md:overflow-hidden w-full md:bg-black hero-banner">
        <div className="absolute 2xl:container 2xl:mx-auto inset-x-0 md:w-full items-center md:items-start mx-auto md:mx-0 mt-5 md:mt-0 md:relative z-10 flex justify-center flex-col text-white">
          <hgroup className="whitespace-nowrap mx-0 text-center md:text-left">
            <h1 className="text-[32px] md:text-[54px] xl:text-[66px] font-Orpheu leading-none uppercase">
              A Timeless <br />
              Collection of <br />
              Intricate Weaves
            </h1>
          </hgroup>
          <span className="flex justify-center md:justify-start mt-4">
            <a href="/rings" target="" rel="" className="block ">
              <div className="relative inline-display no-overflow  animated-link after:bg-white cursor-pointer undefined">
                <div className="bg-maroon text-white tracking-wide text-sm lg:text-lg leading-relaxed text-center py-3 px-4 uppercase ">
                  SHOP NOW
                </div>
              </div>
            </a>
          </span>
        </div>
        <div className="md:absolute inset-0 w-full h-full block z-0">
          <video
            autoPlay="1"
            loop
            muted
            playsInLine="1"
            className="h-full md:h-auto object-cover"
            width="auto"
            height="auto"
            preload
          >
            <source
              src="/images/video/Pashmina-Behind-the-scenes-4-new.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  )
}
export default Videobanner
