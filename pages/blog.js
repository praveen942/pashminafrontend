import BlogBanner from '../components/blog/BlogBanner';
import BlogGrid from '../components/blog/BlogGrid';
import Facebook from '../components/icons/brand-icons/Facebook';
import Footer from '../components/blog/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Instagram from '../components/icons/brand-icons/Instagram';
import Layout from '../components/Layout';
import Pinterest from '../components/icons/brand-icons/Pinterest';
import PopularPostCard from '../components/blog/PopularPostCard';
import TopHeader from '../components/TopHeader'
import Youtube from '../components/icons/brand-icons/youtube';

const latestPosts = [
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL? ',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Pashmina Shawls are crafted from the finest Wool of Cashmere. Check',
    date: 'May 8th, 2022',
    datetime: '2020-03-16',
    imageUrl: '/images/blog/blog1.jpg',
  },
  {
    title: 'WHAT IS THE BEST GRADE OF CASHMERE?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The versatile and finenest grade of Cashmere is the Ladakhi Cashmere. Know More...',
    date: 'May 8th, 2022',
    datetime: '2020-03-10',
    imageUrl: '/images/blog/blog2.jpg',
  },
  {
    title: 'WHERE IS PASHMINA FOUND IN INDIA?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The origination of Pashmina rhymes in the Valley of Kashmir. Know more.....',
    date: 'May 8th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog1.jpg',
  },
  {
    title: 'WHAT IS PASHMINA WOOL USED FOR?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The origination of Pashmina rhymes in the Valley of Kashmir. Know more.....',
    date: 'May 7th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog2.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
]
const cashmerePosts = [
  {
    title: 'IS CASHMERE THE SAME AS PASHMINA?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The terms Pashmina and Cashmere are clearly different. Read this blog to know the difference between the two terms.',
    date: 'January 28th, 2022',
    datetime: '2020-03-16',
    imageUrl: '/images/blog/blog3.jpg',
  },
  {
    title: 'DO VEGANS WEAR CASHMERE SCARF?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Cashmere is not cruel, but it is, after all, an animal product. Hence vegans abstain from using Cashmere, as they believe that all products coming from animals are, on some level, cruelly acquired',
    date: 'December 10th, 2021',
    datetime: '2020-03-10',
    imageUrl: '/images/blog/blog4.jpg',
  },
  {
    title: 'WHICH COUNTRY HAS THE BEST CASHMERE?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Cashmere comes from China, Mongolia, Pakistan, Afghanistan, Iran and India. But which of these countries has the best quality Cashmere?',
    date: 'December 7th, 2021',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog3.jpg',
  },
  {
    title: 'TURNING THE WAYS FOR THE PLEDGE OF FINEST CASHMERE',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'From the Mountains of Changthangi, the finest Cashmere is procured from a rare breed of Goats. Know more...',
    date: 'November 6th, 2021',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog4.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
]
const pashminaPosts = [
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Pashmina Shawls are crafted from the finest Wool of Cashmere. Check',
    date: 'May 8th, 2022',
    datetime: '2020-03-16',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHAT IS THE BEST GRADE OF CASHMERE?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The versatile and finenest grade of Cashmere is the Ladakhi Cashmere. Know More...',
    date: 'May 8th, 2022',
    datetime: '2020-03-10',
    imageUrl: '/images/blog/blog6.jpg',
  },
  {
    title: 'WHERE IS PASHMINA FOUND IN INDIA?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The origination of Pashmina rhymes in the Valley of Kashmir. Know more.....',
    date: 'May 8th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHAT IS PASHMINA WOOL USED FOR?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Pashmina is the Art of crafting Cashmere wool. Check More....',
    date: 'May 7th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog6.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
]
const fashionPosts = [
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Pashmina Shawls are crafted from the finest Wool of Cashmere. Check',
    date: 'May 8th, 2022',
    datetime: '2020-03-16',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHAT IS THE BEST GRADE OF CASHMERE?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The versatile and finenest grade of Cashmere is the Ladakhi Cashmere. Know More...',
    date: 'May 8th, 2022',
    datetime: '2020-03-10',
    imageUrl: '/images/blog/blog6.jpg',
  },
  {
    title: 'WHERE IS PASHMINA FOUND IN INDIA?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'The origination of Pashmina rhymes in the Valley of Kashmir. Know more.....',
    date: 'May 8th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHAT IS PASHMINA WOOL USED FOR?',
    href: '#',
    categories: [
      { name: 'Knowledge', href: '#' },
      { name: 'Art', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Pashmina', href: '#' }
    ],
    description:
      'Pashmina is the Art of crafting Cashmere wool. Check More....',
    date: 'May 7th, 2022',
    datetime: '2020-02-12',
    imageUrl: '/images/blog/blog6.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
]
const popularPost = [
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    imageUrl: '/images/blog/blog5.jpg',
  },
  {
    title: 'WHICH WOOL IS USED FOR PASHMINA SHAWL?',
    imageUrl: '/images/blog/blog5.jpg',
  }
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />
      <Layout >

        <BlogBanner />
        <div className="container mx-auto px-4 md:px-6 xl:px-0 mt-10 grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-6">

          <div className='col-span-8 md:col-span-6'>
            <h2 className="text-3xl tracking-tight font-extrabold font-Orpheu text-gray-900 sm:text-4xl text-center mb-6">THE LATEST</h2>

            <BlogGrid posts={latestPosts} />

            <h2 className="text-3xl tracking-tight font-extrabold font-Orpheu text-gray-900 sm:text-4xl text-center my-6">CASHMERE</h2>

            <BlogGrid posts={cashmerePosts} />

            <h2 className="text-3xl tracking-tight font-extrabold font-Orpheu text-gray-900 sm:text-4xl text-center my-6">PASHMINA</h2>

            <BlogGrid posts={pashminaPosts} />

            <h2 className="text-3xl tracking-tight font-extrabold font-Orpheu text-gray-900 sm:text-4xl text-center my-6">FASHION</h2>

            <BlogGrid posts={fashionPosts} />
          </div>
          <div className="col-span-8 md:col-span-2 md:mt-16">
            <div className="sticky top-6 mb-12">
              <Image
                src="/images/cat-banner/pashmina-shawl1.jpg"
                alt="pashmina-shawl1"
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
                loading='lazy'
              />
              <h2 className="tracking-tight font-extrabold font-Orpheu text-gray-900 text-xl md:text-2xl my-6">Popular Posts</h2>
              <div className="flex flex-col space-y-6 divide-y-2 divide-gray-100">
                {popularPost.map((post, ind) => <PopularPostCard key={ind} post={post} ind={ind} />)}
              </div>
              <h2 className="tracking-tight font-extrabold font-Orpheu text-gray-900 text-xl md:text-2xl mt-8 mb-2">Keep In Touch</h2>
              <div className="flex items-center">
                <div className="w-6 h-6">
                  <Facebook />
                </div>
                <div className="w-6 h-6">
                  <Instagram />
                </div>
                <div className="w-6 h-6 ml-2">
                  <Pinterest />
                </div>
                <div className="w-6 h-6 ml-2">
                  <Youtube />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer recentPosts={popularPost} />
      </Layout>
    </>
  )
}