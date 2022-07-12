import { AiFillHome } from "react-icons/ai";
import ArtList from '../components/Artisian/ArtList';
import Breadcrumb from '../components/Navigation/Breadcrumb';
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
import TopHeader from '../components/TopHeader';

const pages = [
  { name: 'Artisans', href: '#', current: false }
]

export default function Artisans() {
  return (
    <>
      <Head>
        <title>Artisans</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <Layout>
        <div className="h-96 bg-[url('/images/categorybanner.png')] bg-cover justify-center flex flex-col"></div>
        <Breadcrumb pages={pages} />
        <section className="overflow-hidden content-auto  ">
          <div className="container mx-auto px-4 md:px-6 3xl:px-0 py-12">
            <h1 className="text-center font-Orpheu text-4xl md:text-[40px] 2xl:text-5xl">
              Our Artisans
            </h1>
            <div className="py-4">
              <div className="w-28 mx-auto border-2 border-red-900"></div>
            </div>
            <p className="mt-6 text-lg text-center">
              The artisan community of Kashmir is rich with an exceptional know
              how of traditional art, but they lack the access to global market.
              We plan to bridge this gap and provide the artisans all the
              requirements to showcase their collections which brim with grace and
              grandeur. Our endeavor is aimed at creating a better life for each
              artisan, his family and helping them to a secure future. Our
              relations with artisans are based on fair trade, ethical business
              practices and provision of a safe environment.
            </p>
          </div>
        </section>

        <ArtList />

      </Layout>
    </>
  )
}
