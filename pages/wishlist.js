import Breadcrumb from "../components/Navigation/Breadcrumb";
import Head from 'next/head'
import Layout from '../components/Layout'
import List from '../components/WishPage/List';
const pages = [
  { name: 'Wishlist', href: '#', current: false }
]

const wishlist = () => {
  return (
    <>
      <Head>
        <title>WishList</title>
        <meta
          name="description"
          content="get all kind of cloths with pashmina"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-rose-50 text-center text-base py-2.5  cusColor">
        Summer Sale : Up to 60% off
      </section>
      <Layout>
        <div className="h-96 bg-[url('/images/categorybanner.png')] bg-cover justify-center flex flex-col"></div>
        <Breadcrumb pages={pages} />
        <List />
      </Layout>
    </>
  )
}

export default wishlist