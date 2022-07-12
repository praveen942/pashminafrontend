import Image from 'next/image'

export default function PopularPostCard({ post, ind, bigCard = true }) {
  return (
    <div className={ind !== 0 ? "pt-6 relative" : "relative"}>
      <div className={ind !== 0 ? "top-3 absolute left-3 flex items-center justify-center w-6 h-6 bg-black text-white rounded-full z-10" : "-top-3 absolute left-3 flex items-center justify-center w-6 h-6 bg-black text-white rounded-full z-10"}>
        <span className="mt-0.5">{ind + 1}</span>
      </div>
      {ind === 0 && bigCard ? (
        <div
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={400}
            height={270}
            layout="responsive"
            objectFit="cover"
            loading='lazy'
          />
          <div className="flex-1 bg-white p-4 flex flex-col justify-between">
            <a href={post.href} className="block">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
            </a>
          </div>
        </div>
      ) : (
        <div
          className="flex rounded-lg shadow-lg overflow-hidden"
        >
          <div className="w-24 object-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              loading='lazy'
            />
          </div>
          <div className="flex-1 bg-white flex flex-col justify-between">
            <a href={post.href} className="p-2">
              <p className="font-semibold text-gray-900">
                {post.title}
              </p>
            </a>
          </div>
        </div>
      )
      }
    </div>
  )
}
