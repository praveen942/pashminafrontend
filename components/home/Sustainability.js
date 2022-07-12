import Image from 'next/image'

const Sustainability = () => {
  return (
    <>
      <div className="relative bg-no-repeat bg-cover  overflow-hidden bg-[url('/images/bg.jpg')] hidden lg:block">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"></div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-maroon sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="p-16">
                      <div>
                        <p className="text-lg font-medium text-center text-white">
                          SUSTAINABILITY
                        </p>
                        <h2 className="my-5 text-white text-center font-Orpheu text-[36px] 2xl:text-[40px] leading-10">
                          Our move towards sustainability
                        </h2>
                        <p className="text-center text-white mb-7 text-lg">
                          We have taken a big leap by changing our main
                          processes and products. Here among an increase in the
                          use of more sustainable fibres to using more
                          eco-friendly printing methods and creating efficient
                          waste management in our value chain.
                        </p>
                        <div className="flex justify-center">
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm cusColor bg-white hover:bg-indigo-50 sm:px-8"
                          >
                            Learn MoreOur
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative block lg:hidden">
        <div className="relative pt-16 ">
          <Image
            className="w-full"
            src="/images/bg.jpg"
            sizes="(max-width: 999px) 100vw, 72vw"
            height="800"
            width="1000"
            alt="arrow"
            loading='lazy'
          />

          <main>
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"></div>
                <div className=" lg:col-span-6">
                  <div className="bg-maroon sm:w-full sm:mx-auto sm:overflow-hidden">
                    <div className="py-16 px-8">
                      <div>
                        <p className="text-sm font-medium text-center text-white">
                          SUSTAINABILITY
                        </p>
                        <h3 className="text-center text-white text-3xl mb-7 font-Orpheu">
                          Our move towards sustainability
                        </h3>
                        <p className="text-center text-white mb-7 text-base">
                          We have taken a big leap by changing our main
                          processes and products. Here among an increase in the
                          use of more sustainable fibres to using more
                          eco-friendly printing methods and creating efficient
                          waste management in our value chain.
                        </p>
                        <div className="flex justify-center">
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm cusColor bg-white hover:bg-indigo-50 sm:px-8"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Sustainability