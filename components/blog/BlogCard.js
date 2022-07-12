import Image from 'next/image'
import SocialIcons from '../home/SocialIcons'

export default function BlogCard({ post }) {
  return (
    <div
      key={post.title}
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
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {post.categories.map((category, index) => (
              <div key={index} className="flex items-center font-medium text-indigo-600 space-x-2">
                {index !== 0 && (<span className="text-[10px]">&#9670;</span>)}
                <a href={category.href} className="text-xs">
                  {category.name}
                </a>
              </div>
            ))}
          </div>
          <a href={post.href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {post.title}
            </p>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">
              {post.description}
            </p>
            <time dateTime={post.datetime}>{post.date}</time>
          </a>
        </div>

        <div className="mt-6 flex items-center">
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}
