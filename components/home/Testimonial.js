import 'swiper/css'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay } from "swiper";
import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  const handleClick = (e) => {
    const allTestimonials = document.querySelectorAll('.testimonial')
    const allImage = document.querySelectorAll('.testiActive')
    allTestimonials.forEach((testimonial) => {
      let content = testimonial.id
      if (testimonial.classList.contains('block')) {
        testimonial.classList.remove('block')
        testimonial.classList.add('hidden')
      }
      if (e.target.classList.contains(content)) {
        testimonial.classList.add('block')
        testimonial.classList.remove('hidden')
      }
    })

    allImage.forEach((button) => {
      if (button.classList.contains('opacity-90')) {
        button.classList.remove('opacity-90')
        button.classList.add('opacity-50')
      }
      e.target.classList.remove('opacity-50')
      e.target.classList.add('opacity-90')
    })
  }

  return (
    <section className="antialiased sans-serif bg-rose-50 cusColor py-6">
      <div className="my-10 md:my-12 md:py-8 container mx-auto flex flex-col md:flex-row overflow-hidden">
        <div>
          <div className="flex flex-col h-full relative">
            <div className="w-full flex justify-center absolute top-0 left-0 mt-3 md:top-[-30px]   ">
              <Image
                src="/images/Vector.png"
                width="82"
                height="67"
                alt="Vector"
                loading='lazy'
              />
            </div>
            <div className="  relative z-10">
              <div>
                <p
                  id="JD"
                  className="h-[360px] sm:h-[300px] xl:h-[250px] font-Orpheu cusColor testimonial hidden  font-small  lg:font-medium  text-center px-6 py-6 lg:px-48 md:text-[1.8rem] text-xl lg:text-3xl "
                >
                  One of the most streamlined, considered stores we’ve come
                  across. Clothing, accessories, all at an accessible price
                  point.
                </p>
              </div>

              <div>
                <p
                  id="WD"
                  className=" h-[360px] sm:h-[300px] xl:h-[250px] font-Orpheu testimonial block  cusColor   font-small  lg:font-medium text-center px-6 py-6 lg:px-48 md:text-[1.8rem] text-xl lg:text-3xl"
                >
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>

              <div>
                <p
                  id="JW"
                  className="h-[360px] sm:h-[300px] xl:h-[250px] font-Orpheu testimonial hidden  cusColor   lg:font-medium text-center px-6 py-6 lg:px-48 md:text-[1.8rem] text-xl lg:text-3xl"
                >
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>

            <div
              className="self-center container mySwiper grid grid-cols-2 md:grid-cols-3 justify-items-center text-[#56112A] justify-center items-center max-w-6xl gap-4 md:gap-0"
              id="testimonial"
            >
              <div
                className="text-[1.2rem] underline decoration-4 sm:text-2xl md:text-3xl font-bold opacity-50 testiActive cursor-pointer JD "
                onClick={handleClick}
              >
                HIGHSNOBIETY
              </div>

              <div
                className="WD text-[1.2rem] sm:text-2xl md:text-3xl font-bold opacity-90 md:leading-7 testiActive text-center cursor-pointer"
                onClick={handleClick}
              >
                the
                <br />
                gentleman
              </div>
              <div
                className="JW text-[1.2rem] sm:text-2xl md:text-3xl font-Orpheu opacity-50 testiActive cursor-pointer"
                onClick={handleClick}
              >
                DAИSK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
