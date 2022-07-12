import Product from './Product'

function Navigation({ grid, property, setProperty }) {
  const products = [
    {
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
    },
    {
      id: 2,
      name: 'Focus Card Holder',
      href: '#',
      price: '6400',

      color: 'blue yellow green',
      hex: 'bg-blue-900 bg-[#ffff00] bg-green-700',

      size: '2l',
      categoty: 'sale travel ',
      description: 'Walnut',
      imageSrc: '/images/cat-banner/multicolour.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Focus Carry Case',
      href: '#',
      price: '2500',

      color: 'blue',
      hex: 'bg-blue-900',

      size: '6l',
      categoty: 'sale travel ',
      description: 'Heather Gray',
      imageSrc: '/images/cat-banner/multicolour.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 4,
      name: 'Focus Carry Case',
      href: '#',
      price: '300',

      color: 'white',
      hex: 'bg-slate-300',

      size: '12l',
      categoty: '',
      description: 'Heather Gray',
      imageSrc: '/images/cat-banner/riverside-blue-cashmere-wrap3.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
      id: 5,
      name: 'Focus Carry Case',
      href: '#',
      price: '3200',
      color: 'indigo',
      hex: 'bg-indigo-300',

      size: '',
      categoty: '',
      description: 'Heather Gray',
      imageSrc: '/images/cat-banner/riverside-blue-cashmere-wrap3.jpg',
      imageAlt:
        'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ]

  return (
    <>
      <div className="bg-red">
        <div className="grid gap-1 grid-cols-2 lg:grid-cols-3">
          {grid === 3 &&
            products.map((product) => {
              if (property.length === 0) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    setProperty={setProperty}
                  />
                )
              }
              let component
              let lower = Number.MAX_SAFE_INTEGER
              let upper = 0
              let lower2 = ''
              let upper2 = ''

              property.map((w) => {
                if (w.includes('-')) {
                  lower = Math.min(w.split('-')[0], lower)
                  upper = Math.max(w.split('-')[1], upper)
                }
                if (w.includes('_')) {
                  lower2 = parseInt(w.split('_')[0])
                  upper2 = parseInt(w.split('_')[1])
                }
                if (
                  product.color.includes(w) ||
                  product.categoty.includes(w) ||
                  product.size.includes(w)
                ) {
                  component = w
                }
              })
              if (lower && upper) {
                if (product.price >= lower && product.price <= upper) {
                  return <Product key={product.id} product={product} />
                }
              }
              if (lower2 && upper2) {
                if (product.price >= lower2 && product.price <= upper2) {
                  return <Product key={product.id} product={product} />
                }
              }
              if (
                product.color.includes(component) ||
                product.categoty.includes(component) ||
                product.size.includes(component)
              ) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    setProperty={setProperty}
                  />
                )
              }
            })}
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6  lg:grid-cols-4 xl:gap-x-8">
          {grid === 4 &&
            products.map((product) => {
              if (property.length === 0) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    setProperty={setProperty}
                  />
                )
              }
              let component
              let lower = Number.MAX_SAFE_INTEGER
              let upper = 0
              let lower2 = ''
              let upper2 = ''

              property.map((w) => {
                if (w.includes('-')) {
                  lower = Math.min(w.split('-')[0], lower)
                  upper = Math.max(w.split('-')[1], upper)
                }
                if (w.includes('_')) {
                  lower2 = parseInt(w.split('_')[0])
                  upper2 = parseInt(w.split('_')[1])
                }
                if (
                  product.color.includes(w) ||
                  product.categoty.includes(w) ||
                  product.size.includes(w)
                ) {
                  component = w
                }
              })
              if (lower && upper) {
                if (product.price >= lower && product.price <= upper) {
                  return <Product key={product.id} product={product} />
                }
              }
              if (lower2 && upper2) {
                if (product.price >= lower2 && product.price <= upper2) {
                  return <Product key={product.id} product={product} />
                }
              }
              if (
                product.color.includes(component) ||
                product.categoty.includes(component) ||
                product.size.includes(component)
              ) {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    setProperty={setProperty}
                  />
                )
              }
            })}
        </div>
      </div>
    </>
  )
}

export default Navigation
