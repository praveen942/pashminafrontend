import Banner from '../../components/Banner';
import Breadcrumb from '../../components/Navigation/Breadcrumb';
import Facebook from '../../components/icons/brand-icons/Facebook';
import Footer from '../../components/blog/Footer'
import Head from 'next/head';
import Image from 'next/image';
import Instagram from '../../components/icons/brand-icons/Instagram';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Pinterest from '../../components/icons/brand-icons/Pinterest';
import PopularPostCard from '../../components/blog/PopularPostCard';
import Product from '../../components/category/Product';
import TopHeader from '../../components/TopHeader'
import Youtube from '../../components/icons/brand-icons/youtube';

const blog = {
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
};

const product = {
    id: 1,
    name: 'Focus Paper Refill',
    href: '#',
    price: '1300',

    color: 'blue yellow green',
    hex: 'bg-blue-900 bg-[#ffff00] bg-green-700',

    size: '12l',
    categoty: 'sale travel ',
    description: '3 sizes available',
    imageSrc: '/images/cat-banner/multicolour.jpg',
    imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
};

const popularPosts = [
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
    const pages = [
        { name: 'Projects', href: '#', current: false },
        { name: 'Project Nero', href: '#', current: true },
    ]

    return (
        <>
            <Head>
                <title>Pashmina</title>
                <meta
                    name="description"
                    content="get all kind of cloths with pashmina"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            <Layout >
                <Breadcrumb pages={pages} />

                <div className="container mx-auto px-4 md:px-6 3xl:px-0 md:py-4">
                    <div className="flex flex-col mb-4">
                        <div className="flex items-center space-x-2">
                            {blog.categories.map((category, index) => (
                                <div key={index} className="flex items-center font-medium text-indigo-600 space-x-2">
                                    {index !== 0 && (<span className="text-[10px]">&#9670;</span>)}
                                    <a href={category.href} className="text-xs md:text-sm">
                                        {category.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <Link href={blog.href} prefetch={false}>
                            <p className="text-2xl md:text-4xl font-semibold font-Orpheu text-gray-900 cursor-pointer mt-2">
                                {blog.title}
                            </p>
                        </Link>
                        <p className="text-xs md:text-base text-gray-500">
                            {blog.description}
                        </p>
                        <time className="text-xs md:text-base" dateTime={blog.datetime}>{blog.date}</time>
                    </div>
                    <div>
                        <Image
                            src="/images/Pashmina-Making-36.jpeg"
                            alt="pashmina-shawl1"
                            width={200}
                            height={100}
                            layout="responsive"
                            objectFit="cover"
                            className='rounded-md'
                            loading='lazy'
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 md:px-6 3xl:px-0 mt-4 grid grid-cols-1 lg:grid-cols-8 gap-6">
                    <div className='col-span-8 lg:col-span-6'>
                        <p className="text-sm md:text-base text-gray-500 text-justify">
                            In the unending horizon of fashion, Pashmina Art has bestowed diverse accessories. The luxurious feel of each masterpiece is evident in the creation of Pashmina Art. There are two styles in Men&apos;s Pashmina. They are; Men&apos;s Cashmere Scarves and Men&apos;s Pashmina Shawls. There are diverse designs in each of the styles of Men&apos;s Pashmina. Among the numerous designs, Men&apos;s Patterned Pashmina is an exquisite design. The hand-weave in the Patterned Cashmere Scarves is the explicitly intricate weave skillfully done by the artisans of the Kashmir Valley. The heritage, artisans and the nature of Kashmir Valley bestow upon the creation of Pashmina Art. From the procurement to the crafting of the finest Cashmere, nature glorifies skill and luxury.
                        </p>
                        <h3 className="text-xl md:text-3xl my-4">Procurement of finest Cashmere for Men&apos;s Pashmina</h3>
                        <Image
                            src="https://www.pashmina.com/wp_editorial/wp-content/uploads/2018/09/stunning-land-of-Ladakh-1024x682.jpg"
                            alt="pashmina-shawl1"
                            width={300}
                            height={200}
                            layout="responsive"
                            objectFit="contain"
                            loading='lazy'
                        />
                        <p className="text-xs md:text-sm text-center mt-2 text-gray-500">Changra goats in Ladakh</p>
                        <p className="text-sm md:text-base text-gray-500 text-justify mt-2">
                            It all starts in Ladakh. The Changhthanghi mountain is at a high altitude. The temperature goes to a minimum of -20°C in winter. The winter is harshest in Changhthanghi. A rare species of Goats called Changra Goats dwell at the feet of Changhthanghi. The habitat and climate of Changhthanghi propel them to develop a thick undercoat of wool. The Changra goats develop wool on their bodies especially behind the ears, on the neck and under the belly. Changra goats are medium-sized goats with twisted horns. The Goats are herded and grazed by the Changpa tribe of Changhthanghi. The goats shed off the Wool in summer to let the fresh air in. Moreover, the wool is also combed out by Changpa herders. The wool is called Cashmere wool. The Cashmere wool is then packed and transferred to the Valley of Kashmir.
                        </p>
                        <p className="text-sm md:text-base text-gray-500 text-justify mt-2">
                            The Changra Goats produce the fine Cashmere wool once every year. Therefore, only around 80 to 170 gms of Ladakhi Cashmere are produced during a year. Therefore, considered the rarest. Also, other breeds of it produce several times more as there is almost 400 million Cashmere eliciting Goats all over the world. Consequently, the production caters to the manufacture of different styles like Men&apos;s Pashmina Shawls and Men&apos;s Cashmere Scarves.
                        </p>
                        <h3 className="text-xl md:text-3xl my-4">Men&apos;s Pashmina - From the crafting of finest Cashmere from Ladakh</h3>
                        <p className="text-sm md:text-base text-gray-500 text-justify mt-2 mb-4">
                            The Ladakhi Cashmere is crafted in the sphere of Kashmir Valley. The journey begins in spring and comes to end in winter. The shedding of the Cashmere wool by Changra Goats happens in spring. Afterwards, the process of crafting takes months to finish till the final piece comes into existence in winter. Firstly, the Cashmere wool is packed in small packets. The packets are transferred to the Valley of Kashmir. After reaching the Valley of Kashmir, the crafting of the finest Cashmere proceeds. Therefore, the first step is the sorting and cleaning of the tufts of Cashmere wool. The next step is the drying of Cashmere wool.
                        </p>
                        <Image
                            src="https://www.pashmina.com/wp_editorial/wp-content/uploads/2021/06/Blog-images-1080x700-24-1024x664.jpg"
                            alt="pashmina-shawl1"
                            width={300}
                            height={200}
                            layout="responsive"
                            objectFit="contain"
                            loading='lazy'
                        />
                        <p className="text-xs md:text-sm text-center mt-2 text-gray-500">Raw cashmere</p>
                        <p className="text-sm md:text-base text-gray-500 text-justify mt-2 mb-8">
                            The sorted, rinsed and dried Cashmere wool is distributed to the households of Kashmir for the step of Spinning. Spinning is the translation of Cashmere wool to fine Cashmere yarn by using a wooden wheel called yinder. The process is mostly done by the women of Kashmir Valley. They meticulously work upon the Cashmere wool while humming the Kashmiri folk songs. Thus, the whole process is accompanied by the skill of women, the heritage and the Kashmiri traditions.
                        </p>
                        <span className="font-bold">
                            Also read: <Link href="/" prefetch={false}><span className="!text-maroon cursor-pointer hover:underline">MEN&apos;S PASHMINA - OMBRE CASHMERE SCARVES</span></Link>
                        </span>
                        <div className="mt-4">
                            <span className="font-bold text-2xl">Related Products:</span>
                            {/* <Banner /> */}
                            <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 mt-4 mb-12">
                                <Product product={product} />
                                <Product product={product} />
                                <Product product={product} />
                                <Product product={product} />
                                <Product product={product} />
                                <Product product={product} />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4 pb-4 border-b border-gray-100'>
                            <div className="p-2 border border-gray-100">
                                Category 1
                            </div>
                            <div className="p-2 border border-gray-100">
                                Category 2
                            </div>
                            <div className="p-2 border border-gray-100">
                                Category 3
                            </div>
                            <div className="p-2 border border-gray-100">
                                Category 4
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-4 border-b border-gray-100">
                            <div className="w-6 h-6 cursor-pointer">
                                <Facebook />
                            </div>
                            <div className="w-6 h-6 cursor-pointer">
                                <Instagram />
                            </div>
                            <div className="w-6 h-6 ml-2 cursor-pointer">
                                <Pinterest />
                            </div>
                            <div className="w-6 h-6 ml-2 cursor-pointer">
                                <Youtube />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 py-4 border-b border-gray-100">
                            <div className="w-24">
                                <Image
                                    src="/images/embroidered-pashmina.png"
                                    alt="pashmina-shawl1"
                                    width={100}
                                    height={100}
                                    layout="responsive"
                                    objectFit="cover"
                                    className='rounded-full'
                                    loading='lazy'
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-2xl">Pashmina.com</h4>
                                <p className="mt-1 text-gray-500">
                                    We, Pashmina.com, are the largest curators of pure and handcrafted Pashmina products in the online space. We are on a mission to revive this dying art by spreading our wings throughout the world by way of our online platform. Our website serves as a window to our range of products that are luxurious and have the highest quality. We offer the widest range, certified quality, luxurious packaging and free shipping to over 250 countries.
                                </p>
                                <div className="flex items-center space-x-4 mt-2 mb-4">
                                    <div className="w-3 h-3 cursor-pointer">
                                        <Facebook />
                                    </div>
                                    <div className="w-3 h-3 cursor-pointer">
                                        <Instagram />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/" prefetch={false}>
                            <div className="flex items-center space-x-4 py-4 border-b border-gray-100 cursor-pointer">
                                <div className="w-24">
                                    <Image
                                        src="/images/embroidered-pashmina.png"
                                        alt="pashmina-shawl1"
                                        width={400}
                                        height={200}
                                        layout="responsive"
                                        objectFit="cover"
                                        className='rounded-md'
                                        loading='lazy'
                                    />
                                </div>
                                <div className="flex-1">
                                    <span className="text-gray-500">
                                        previous post
                                    </span>
                                    <h4 className="text-lg">Art of Pashmina - Solid Pashmina Style</h4>
                                </div>
                            </div>
                        </Link>

                        <div className="mt-4">
                            <h6 className="text-3xl">Leave a comment</h6>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                                <div className="flex flex-col">
                                    <label htmlFor='name'>Name</label>
                                    <input type="text" name="name" id="name" className="border border-gray-400 rounded-md p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" name="email" id="email" className="border border-gray-400 rounded-md p-2" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor='website'>Website</label>
                                    <input type="text" name="website" id="website" className="border border-gray-400 rounded-md p-2" />
                                </div>
                                <div className="flex flex-col col-span-1 lg:col-span-3">
                                    <label htmlFor='comment'>Comment</label>
                                    <textarea id="comment" className="border border-gray-400 rounded-md p-2" rows={6} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 lg:col-span-2">
                        <div className="sticky top-4 mb-12">
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
                                {popularPosts.map((post, ind) => <PopularPostCard key={ind} post={post} ind={ind} />)}
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

                <Footer recentPosts={popularPosts} />
            </Layout>
        </>
    )
}