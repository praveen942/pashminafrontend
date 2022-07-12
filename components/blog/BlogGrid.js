import ArrowRight from '../icons/ArrowRight'
import BlogCard from './BlogCard'
import Image from 'next/image'

export default function BlogGrid({ posts }) {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.title} post={post} />)}
      </div>
      <a
        href="#"
        className="flex items-center justify-center space-x-1 px-4 py-3 cusColor text-base sm:my-14 mt-6 sm:px-8"
      >
        <span>
          VIEW ALL
        </span>
        <div className="scale-[0.6] mb-1">
          <ArrowRight />
        </div>
      </a>
    </>
  )
}
