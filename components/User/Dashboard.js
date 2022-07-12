import Link from 'next/link'
import { useRouter } from 'next/router'

const subNavigation = [
  { name: 'My Account', href: '/user' },
  { name: 'My Orders', href: '/user/orders' },
  { name: 'Wish List', href: '/user/wishlist' },
]


export default function Dashboard({ children }) {
  const router = useRouter()
  return (
    <main className="relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-0 ">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <aside className="py-6 lg:col-span-3 md:w-1/4">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <Link href={item.href} key={item.name}
                    id={item.name} prefetch={false}>
                    <div
                      className={
                        router.pathname == `${item.href}`
                          ? 'bg-[#fdf1f2] border-maroon text-maroon group border-l-4 px-3 py-2 flex items-center text-xl font-medium nav-item cursor-pointer'
                          : 'border-transparent text-gray-900 hover:bg-gray-50 group border-l-4 px-3 py-2 flex items-center text-lg font-medium nav-item cursor-pointer'
                      }
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </aside>
            <div className="md:w-3/4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
