import Breadcrumb from "../components/Navigation/Breadcrumb";
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import React from 'react'

const ourStory = () => {
  const pages = [
    { name: 'Our Story', href: '#', current: false }
  ]
  return (
    <>
      <Head>
        <title>Our Story</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-pink text-center text-base py-2.5  cusColor">
        Summer Sale : Up to 60% off
      </section>
      <Layout>
        <Breadcrumb pages={pages} />

        <div className="container mx-auto px-4 md:px-6 3xl:px-0 wishlist-section story-right-section mt-4">
          <h1 className=" text-center font-Orpheu text-3xl lg:text-4xl 2xl:text-5xl">
            OUR STORY
          </h1>
          <div className="w-28 mx-auto border border-red-900 my-2"></div>
          <div className="items-center textcus">
            <p className="text-justify mt-8 mb-2.5">
              In the world of fast fashion and day-old trends, sustainability
              might not be the first choice, but it definitely is the perfect
              antidote. Following fashion fads is effortless, but conscious
              shopping might be exhausting. Contemporary is everywhere, but opting
              for traditional in modern times is audacious. And with this audacity
              and courage, it was Varun who went on the journey at Building a
              sustainable brand of self-discovery and an artistic journey, which
              he feels is an honour to share
            </p>
            <p className="text-justify mt-4 mb-2.5">
              Varun Kumar, a social entrepreneur, humanitarian, and a father
              founded Pashmina.com with a clear mission - to reintroduce the
              luxury of slow and sustainable fashion &amp; switch to the handmade
              natural fabric. He wanted to spread awareness of the impact of our
              choices on the planet and hence invested his time, money, and energy
              in the revival of this timeless craft called Pashmina, whose
              processing has zero harm on the environment, and whose renaissance
              would be an improvement in the livelihood of many. Varun considered
              celebrating an artisan&apos;s efforts quite essential. Catering to the
              need of improving the future of our planet, which only grows with
              each passing day, became the vision of Pashmina.com, and since then,
              this has been the mantra behind every single activity carried out
              here.
            </p>
          </div>

          <div className="items-center textcus">
            <h2 className="lg:hidden text-left font-Orpheu mb-8 text-2xl lg:text-3xl 2xl:text-5xl">
              FIRST IMPRESSIONS
            </h2>
            <div className="lg:flex items-center">
              <div className="lg:flex lg:flex-col lg:gap-y-6 lg:mt-[-9rem] ">
                <h2 className="hidden lg:block text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl">
                  FIRST IMPRESSIONS
                </h2>
                <p>
                  It was at a young age that Varun (the founder of Pashmina.com) got
                  exposure to the world of poultry. His father, a respected figure,
                  founded the Poultry Federation of India as a unanimous voice for
                  the industry. It served as a link to communicate with the
                  government, media, and public. The mission of this body was to
                  preserve, promote, and protect the interests of stakeholders
                  involved in the poultry industry. Varun was witness to this and
                  considered his father as a driving force in his life. He was so
                  taken up by his father&apos;s dedication and passion, and always aimed
                  to follow in his footsteps.
                </p>
              </div>
              <div className="lg:hidden mb-5 w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4">
                <Image
                  alt="Story"
                  src="/images/story/story-1.webp"
                  width="562px"
                  height="562px"
                  loading='lazy'
                />
              </div>
              <div className="hidden lg:block relative w-[1424px] h-[393px] mb-5 px-4">
                <Image
                  alt="Story"
                  src="/images/story/story-1.webp"
                  objectFit="contain"
                  layout="fill"
                  loading='lazy'
                />
              </div>
            </div>

          </div>

          <div className="items-center textcus">
            <div className="lg:flex items-center">
              <div className="hidden lg:block relative w-[1424px] h-[524px] mb-5 px-4">
                <Image
                  alt="Story"
                  src="/images/story/Untitled-106_3__jpg.webp"
                  objectFit="contain"
                  layout="fill"
                  loading='lazy'
                />
              </div>
              <div className="">
                <p>
                  It was all smooth until the summer of 2008. The bird flu
                  pandemic destroyed all that the family had built over the years.
                  The government killed all the livestock, which left the family
                  shattered. It was after all that Varun&apos;s father had given his
                  sweat, blood, and tears to this industry, and a turn of events
                  just wiped off all that in mere 2 years. It was at this point
                  that Varun was preparing to go to London for his master&apos;s at
                  Sheffield Hallam University.
                </p>
                <p>
                  Even though they were reeling under severe financial crisis, the
                  family never came between Varun and his dreams. His father was
                  supportive, to say the least, and backed Varun to pursue his
                  ambitions. His mother too never bailed out during his ups and
                  downs. She stood like a rock, always supporting Varun, pushing
                  him to strive his best without giving up!
                </p>
              </div>
              <div className=" lg:hidden mb-5 w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4">
                <Image
                  alt="Story"
                  src="/images/story/Untitled-106_3__jpg.webp"
                  width="562px"
                  height="562px"
                  loading='lazy'
                />
              </div>

            </div>
          </div>

          <div className="items-center textcus">
            <div className="lg:flex items-center">
              <div className="lg:px-4">
                <p>
                  After completing his education, Varun worked in London and earned
                  well enough to spend the rest of his life at ease, but there was a
                  void within him. Despite being successful, he was still in search
                  of his true calling. He returned to India, having left his job and
                  citizenship (something that many would cherish). It was love for
                  his own people that triggered him to move back to his home
                  country.
                </p>
                <p>
                  Varun then headed the Marketing Division of an automobile giant
                  for several years. He played a vital role in product acquisition
                  projects, business analysis, and other key areas. The transition
                  from pounds to a few thousand rupees wasn&apos;t easy. And even though
                  he had a successful stint this time around as well, there was
                  always a drive within him to do a lot more and more so, for his
                  country.
                </p>
              </div>
              <div className=" lg:hidden mb-5 w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4">
                <Image
                  alt="Story"
                  src="/images/story/IMG_3107_1__jpg.webp"
                  width="600px"
                  height="515px"
                  loading='lazy'
                />
              </div>
              <div className="  hidden lg:block relative w-[1424px] h-[393px] mb-5 px-4">
                <Image
                  alt="Story"
                  src="/images/story/IMG_3107_1__jpg.webp"
                  objectFit="contain"
                  layout="fill"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
          <div className="items-center textcus">
            <div className="lg:flex items-center">
              <div className="hidden lg:block relative  w-[250%] h-[429px] mb-5 px-4">
                <Image
                  alt="Story"
                  src="/images/story/061_26A_jpg.webp"
                  objectFit="contain"
                  layout="fill"
                  loading='lazy'
                />
              </div>
              <div className="lg:px-4">
                <p>
                  The turning point came about in his life when he undertook the
                  Amarnath Yatra. The Yatra is a pilgrimage to one of the holiest
                  shrines of the Hindu faith. Call it divine intervention or a
                  stroke of destiny, Varun was deeply moved by the art of Pashmina
                  during these 3 weeks. Pashmina is one of the most exquisite and
                  finest of the world&apos;s veritable works of art. But what Varun&apos;s
                  artistic bent of mind observed in Kashmir, began a new chapter in
                  his life. He now wanted to move mountains and boulders for the
                  suffering artisans and do his bit for the art of Pashmina. And so,
                  his journey began…
                </p>
              </div>
              <div className="lg:hidden mb-5 w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4 ">
                <Image
                  alt="Story"
                  src="/images/story/061_26A_jpg.webp"
                  width="624"
                  height="420"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
          <div className="items-center my-8 textcus">
            <div className="lg:flex ">
              <div className="">
                <h2 className=" text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl">THE JOURNEY OF PASHMINA.COM
                </h2>

                <p>
                  Pashmina is an oft-heard word that conjures up images of luxury
                  and high fashion. But not many know of its origin. From the 16th
                  to the 19th century, Kashmir valley was the only region where
                  skills existed to exploit the full potential of fine goat-fleece-
                  locally known as <em>pashm</em>. This was to be woven into a
                  patterned textile of superlative softness and delicacy. When{' '}
                  <em>pashm</em> made its appearance in the West in the form of the
                  shawl, it came to be known as &apos;cashmere&apos;. Properly speaking,
                  Pashmina is the art of handweaving <em>pashm </em>into wearable
                  apparel and wraps and accessories, and <em>pashm</em> is the downy
                  undercoat of the Tibetan goat. Pashm is no doubt among the finest
                  fibres ever woven. Nothing epitomizes the glorious history of
                  Kashmiri craftsmanship as warmly and beautifully as the Pashmina.
                  It was this Pashmina which once spelled both exclusivity and
                  security for Kashmiri women.
                </p>
                <p>
                  For all these reasons, Varun was so taken up with this art, that
                  he spent much of his time researching, interacting with artisans,
                  and delving deep into the nuances of Pashmina. For starters, he
                  decided to make a substantial investment to acquire Pashmina.com.
                  It was under the US Corporation for over two decades. This was an
                  intentional move to build credibility among the international
                  clientele.
                </p>
                <div className="items-center my-8  textcus">
                  <h2 className=" text-left font-Orpheu my-8  text-2xl lg:text-[40px] 2xl:text-5xl">Support from Family and Friends
                  </h2>

                  <p>
                    Though trust-building and credibility assume high importance,
                    there&apos;s much more it takes to establish a brand. The journey was
                    replete with hurdles. But Varun&apos;s determination, passion, and his
                    family&apos;s support pushed him to face the biggest challenge of his
                    life. In fact, during this stage, his daughter was at the tender
                    age of two. In his heart of hearts, he was aware that there wasn&apos;t
                    any fall back if his plans backfired. But even though he was in
                    this huge dilemma, his family never questioned Varun &amp; reposed
                    all the faith they had in him. All of the family saw the
                    adversities together, never raising a doubt. And, with all the
                    courage, grit, and support he moved forward unabashedly.
                  </p>
                </div>
                <div className=" hidden lg:block relative  w-[250%] mb-5 px-4 ">
                  <Image
                    src="/images/story/Making_of_a_Kani_Shawl_2__jpg.webp"
                    alt="Story"
                    objectFit="contain"
                    layout="fill"
                    loading='lazy'
                  />
                </div>
                <div className="lg:hidden mb-5  aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4 ">
                  <Image
                    alt="Story"
                    src="/images/story/Making_of_a_Kani_Shawl_2__jpg.webp"
                    width="379"
                    height="500"
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items-center my-8 textcus">
            <div className="lg:flex items-center">
              <div className="  hidden lg:block relative w-full  w-[144%] h-[429px] mb-5 px-4">
                <Image
                  src="/images/story/image_2020_11_06T05_30_44_543Z_png.webp"
                  alt="Story"
                  layout="fill"
                  object="contain"
                  loading='lazy'
                />
              </div>


              <div className="lg:ml-8">
                <h2 className=" text-left font-Orpheu  mb-8 text-2xl lg:text-[40px] 2xl:text-5xl">Varun&apos;s empathy for Artisans
                </h2>

                <p className="text-left">
                  In the coming years, Varun was involved in all the groundwork. He
                  had renewed vigor and passion within him to do all it takes to
                  achieve his dream. For him, Pashmina.com was not just a means to
                  make money; there resided a larger cause in his heart.&nbsp; He
                  felt strongly for the art of Pashmina and dreamt of taking it to
                  the world. But he was also deeply moved by the condition of the
                  skilled artisans in Kashmir. Through his brand, he wished to
                  empower them and bring them on the world map for their art of
                  craftsmanship.
                </p>
                <p className="text-left">
                  The biggest challenge was to get the right artisans on board. That
                  is because most of them lived in far-off villages and weren&apos;t even
                  exposed to computers. Besides, they weren&apos;t as educated to handle
                  their inventories. Even if they managed to sell 1-2 Pashminas
                  every month through this platform, their earnings would come in
                  much later. This would pose a hurdle for them to sustain their
                  families.
                </p>
              </div>
            </div>
            <div className="lg:hidden mb-5  aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-w-2 sm:aspect-h-3 px-4 ">
              <Image
                alt="Story"
                src="/images/story/image_2020_11_06T05_30_44_543Z_png.webp"
                width="379"
                height="300"
                loading='lazy'
              />
            </div>
            <div className="">
              <div className="text-left">
                <p>
                  Call it a stroke of luck or Varun&apos;s destiny, it was at this point
                  that the Crafts Development Institute (CDI) opened its doors. CDI
                  comes under the aegis of the Ministry of Textiles GOI, houses the
                  first-ever Pashmina testing laboratory, which aims at bringing
                  authenticity to the art of Pashmina. This was reassuring, but the
                  journey was tougher than he had imagined. He had to now scout for
                  the choicest artisans to buy from and get each piece certified
                  from the CDI for quality assurance. Besides, it was significant to
                  invest his savings into the right kind of inventory as well.
                </p>
                <p>
                  Varun lays great emphasis on authenticity and quality. That&apos;s
                  something that stands out among a ton of other dealers as a
                  distinctive factor. What differentiates Pashmina.com from the rest
                  is their genuine involvement in the art. From buying the wool to
                  using the art, and getting the artisans to access wooden looms to
                  support themselves and their families, they&apos;ve always had their
                  hearts in the right place.
                </p>
              </div>

            </div>
          </div>
          <div className="items-center my-8 textcus">
            <div className="">
              <h2 className=" text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl">Slow, Sustainable Fashion</h2>
              <p>
                Back in the days, luxury had a different meaning altogether.
                Luxury meant something that was beautiful and rare. When implied
                to fashion, luxury apparel would be something artistic and
                detailed. Fine craftsmanship, exquisite designing, flawless
                quality, ancestral heritage, and timelessness would be the key
                properties a luxury product would encompass.
              </p>
              <p>
                With the advent of the Industrial Revolution came the idea of
                readymade clothing, which slowly poisoned society with fast
                fashion. Fast fashion-focussed on cheap, disposable trendy pieces
                that never lasted. Shopping became a hobby, and people could dress
                up in the latest outfits, only to be disposed off in a month or
                even worse a week later. This led to a toxic system of
                overproduction and consumption, in addition to wastage, and made
                fashion one of the main polluters of the environment. Cheap &amp;
                child labour would be employed, workers would be forced to work
                more in an unsafe environment, and supply chains had poor
                visibility. Shoppers would shop every other day with the
                apprehension that they might miss on a popular trend. Use of toxic
                dyes, deforestation to set up industries, killing of animals to
                meet demands, enormous textile wastage, low wages to workers
                became everyday practices
              </p>
            </div>
            <div className="lg:flex items-center">
              <div className="">
                <p>
                  Even today, fast fashion has heavily corrupted consumers.&nbsp; It
                  is crystal clear how there is an imbalance on this planet when it
                  comes to fashion. Fast fashion is what has become a rage, thanks
                  to women&apos;s magazines scream weekly wardrobe revisions. What most
                  people do not realize is that this is not just leading to
                  ecological damage, but also taking away from the labor of these
                  artisans. It is these artisans who tirelessly work to create even
                  a single hand-crafted
                  piece.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>
                  At Pashmina.com, each piece is designed sustainably using natural
                  Himalayan Cashmere, through which the empowerment of local
                  artisans becomes possible. The concept of sustainable fashion has
                  brought us to a point where we realize that we, as residents of
                  this planet, we have a responsibility to uphold. If nature has
                  bestowed so much upon us, we need to give back to it. For this
                  reason, Varun and his team decided to go for the manufacturing of
                  Pashmina. The idea is to move towards sustainable, eco-friendly,
                  and handcrafted pieces. This is something that both the
                  traditional and modern audiences resonate with. There is no other
                  piece of clothing that feels so authentically luxurious and
                  sublime.
                </p>
              </div>
              <div className="  relative  lg:w-[250%] w-full h-[200px] lg:h-[429px] lg:mb-5 lg:m-4 ">
                <Image
                  src="/images/story/image_2020_11_06T05_30_59_638Z_png.webp"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  loading='lazy'
                />
              </div>
            </div>
            <div className="2">
              <p>
                Our products are handmade in high quality and timeless design and
                are manufactured in an environmentally friendly manner. These
                luxury pieces are ethically designed keeping in view the working
                conditions and fair wages of local artisans. Our team continuously
                works to improve every stage of the product life cycle considering
                both environmental and socio-economic factors. Efficient use of
                natural resources, zero animal cruelty, ethical business
                relationships with our stakeholders (artisans, employees, and
                customers) are overall attitudes to how we work and continue
                working.
              </p>
              <p>
                We as a team have planned to explore the world through the lens of
                handmade. We are a witness to the commitment of our artisans. We
                are a testimony of their artistry. We believe that we exist to
                showcase their magic to the world. We present to you &quot;The best of
                the Finest&quot; - Pashmina
              </p>
            </div>
            <div className="2">
              <h2 className=" text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl mt-8">Empowerment
              </h2>

              <p>
                We empower artisans to make these products and sell them to us
                directly. This makes them owners of their business. Each piece is
                then tested by the CDI before it is sold to the public. Every time
                a product is sold, 5% of the proceeds are additionally reinvested
                in uplifting the family of artisans, toward the educational needs
                of their children or investment needs of Handloom itself. Today,
                Pashmina.com is involved with more than 100 artisan families and
                has helped them to stabilize their lives.
              </p>
            </div>
          </div>
          <div className="items-center textcus">
            <div className="lg:flex items-center">
              <div className=" relative w-full h-[200px] lg:w-[120%] lg:h-[350px] mb-5 px-4">
                <Image
                  src="/images/story/image_2020_11_06T05_31_10_534Z_jpg.webp"
                  alt="story"
                  layout="fill"
                  objectFit="contain"
                  loading='lazy'
                />
              </div>
              <div className="lg:px-8 px-4">
                <h2 className=" text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl mt-8">One for Everyone
                </h2>

                <p>
                  There’s also been a stereotypical image in mind when people think
                  of Pashmina. Most believe that it caters much more to a certain
                  age-group, primarily the older generation. Besides being favored
                  as an heirloom, Pashmina shawls and stoles are much coveted among
                  the younger lot as well. It is an epitome of high luxury and often
                  adorned by the fashionistas of the world.
                </p>
                <p>
                  Varun also believes in striking a balance and catering to the
                  needs of all its customers. Their line of luxury lends the art of
                  craftsmanship to each product. There are some who go for the
                  traditional ones. For their artful taste of accessorizing, an
                  opulent assortment of hand-embroidered and Kashmiri Kani shawls
                  are exquisitely handcrafted in heavenly colors of the world.
                </p>
              </div>
            </div>
            <div className="lg:px-8 px-4">
              <p>
                Wraps are hand embroidered in the shimmers of Kashmiri Tilla Dozi,
                Kashmiri Paper Mache, and Sozni Kari. The embroideries are so
                intricate and classic that one might never get tired of watching
                the detailing and use of threads in such meticulous and impeccable
                fashion. These are the traditional pieces that the royals once
                owned.
              </p>
              <p>
                Young women usually prefer modish patterns in Pashmina. These
                include Ombres, Swarovski-embellished wraps, prints, and patterns.
              </p>
              <p>
                Available in a variety of styles, each &amp; every piece is
                certified by the Ministry of Textiles, authenticating its quality
                in terms of purity &amp; technique.
              </p>
              <p>
                Besides, the portfolio includes hand-crafted scarves, stoles,
                hijabs, headscarves for a perfect winter experience. The
                collection also extends to throws and blankets that are luxurious
                in feel and are available in neutral tones. These products serve
                as the perfect gifts for all occasions, be it weddings, birthdays,
                or anniversaries. Pashminas are even customizable and serve as
                lovely presents for loved ones.
              </p>
            </div>
          </div>
          <div className="items-center mb-10 textcus">
            <div className="">
              <h2 className=" text-left font-Orpheu mb-8 text-2xl lg:text-[40px] 2xl:text-5xl mt-8">Pashm by Pashmina.com
              </h2>

              <p>
                In early 2020, Pashm was introduced by Pashmina.com as a
                representation of who we are as a brand. In January 2020, we
                thought about a way to express ourselves in a fresh way. So we
                took the first step by rolling out our new visual identity on the
                website, i.e, Pashm
              </p>
              <p>
                Pashm is a luxury brand committed to preserving the traditional
                artisanal craft of Pashmina. Our endeavor is to facilitate the
                production of authentic handcrafted Pashmina to ensure its
                sustainable growth.
              </p>
              <p>
                At Pashm, we aspire to design and develop beautifully handmade,
                timeless pieces from the finest Cashmere yarns through sensitively
                understanding the craft and blending its traditional essence with
                contemporary patterns. With a passion to work in an ethically
                responsible environment, Pashm strives to conserve the age-old
                practices of handcrafting pure Cashmere by nurturing present-day
                relevance in the very heart of this heritage craft.
              </p>
              <p>
                Varun has always been sensitive towards challenges that affect the
                environment unfavorably. Pollution, global warming, animal
                cruelty, and similar issues have always been of great concern for
                this young man of 35. For this reason, he was enchanted by the art
                of Pashmina and the fact that it does not conjure up pollution.
              </p>
              <p>
                “Heritage and quality are appealing. Dwindling natural resources,
                creating an imbalance on the planet, exploitation of labour,
                animal cruelty is ugly”, he says. Varun wants shoppers to be smart
                and well informed and opt for the brands which are committed to
                protect and give back to the environment. He wishes that customers
                fall in love with heritage and culture as he did.
              </p>
              <p>
                “Brands should tell stories, products should be passed to
                generations. Luxury should become a memory. Buy less, choose well,
                and invest in something that is timeless”, he says
              </p>

              <p>
                Apart from being the founder and CEO at Pashmina.com, Varun is
                currently the president of the Rotary Club Millennium Gurgaon. He
                also heads waterrecycling.com which educates the audience about
                water conservation, water recycling, and facts about water
                pollution and scarcity. In the future, Varun plans to take up more
                projects which are either awareness or a solution to a global
                issue.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ourStory