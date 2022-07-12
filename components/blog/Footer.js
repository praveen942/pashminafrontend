import Image from "next/image";
import PopularPostCard from "./PopularPostCard";

export default function Footer({ recentPosts }) {
    return (
        <div className="container mx-auto px-4 md:px-6 3xl:px-0 md:pt-10 pb-10 grid grid-cols-1 lg:grid-cols-3 justify-items-stretch gap-6">
            <div className="flex flex-col space-y-4">
                <h2 className="text-3xl text-center pb-2 border-b">About Pashmina.com</h2>
                <div>
                    <Image
                        src="/images/cat-banner/pashmina-shawl1.jpg"
                        alt="pashmina-shawl1"
                        width={400}
                        height={300}
                        layout="responsive"
                        objectFit="cover"
                        loading='lazy'
                    />
                </div>
                <p className="">
                    Pashmina.com brings to you Pure Pashmina which are 100% Cashmere, Purely Hand Crafted & Individually Certified by Ministry of Textiles, Govt of India
                </p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl text-center pb-2 border-b">RECENT POSTS</h2>
                <div className="flex flex-col space-y-6 divide-y-2 divide-gray-100 mt-6">
                    {recentPosts.map((post, ind) => <PopularPostCard key={ind} post={post} ind={ind} bigCard={false} />)}
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl text-center pb-2 border-b">HANDMADE LUXURY</h2>
                <div className="flex flex-col space-y-4 md:p-6">
                    <div>
                        <Image
                            src="/images/cat-banner/pashmina-shawl1.jpg"
                            alt="pashmina-shawl1"
                            width={300}
                            height={200}
                            layout="responsive"
                            objectFit="cover"
                            loading='lazy'
                        />
                    </div>
                    <p className="">
                        Luxury Pashmina in hand embroidered patterns
                    </p>
                </div>
            </div>
        </div>
    )
}