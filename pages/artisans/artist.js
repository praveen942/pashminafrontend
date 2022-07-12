import ArtBio from "../../components/Artisian/ArtBio"
import Breadcrumb from "../../components/Navigation/Breadcrumb";
import Head from 'next/head'
import Layout from '../../components/Layout'
import TopHeader from "../../components/TopHeader";

export default function Artisans() {

  const pages = [
    { name: 'Artisans', href: '/artisans', current: false },
    { name: 'Artist', href: '#', current: false }
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
      <Layout>
        <div className="h-40 bg-[url('/images/art/art1.jpg')] bg-cover justify-center flex flex-col"></div>
        <Breadcrumb pages={pages} />
        <ArtBio />

      </Layout>
    </>
  )
}
