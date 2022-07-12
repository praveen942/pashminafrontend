import { HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ pages }) {
    return (
        <nav className="text-gray-900 flex " aria-label="Breadcrumb">
            <ol
                role="list"
                className="container mx-auto w-full flex space-x-4 my-4 px-4 md:px-6 2xl:px-0"
            >
                <li className="flex">
                    <div className="flex items-center cursor-pointer">
                        <Link href="/" prefetch={false}>
                            <div>
                                <HomeIcon
                                    className="flex-shrink-0 h-5 w-5"
                                    aria-hidden="true"
                                />
                                <span className="sr-only text-lg">Home</span>
                            </div>
                        </Link>
                    </div>
                </li>

                {pages.map((page) => (
                    <li key={page.name} className="flex">
                        <div className="flex items-center">
                            <svg
                                className="flex-shrink-0 w-2 h-4 lg:w-2 lg:h-4 md:w-2 md:h-4 text-gray-900"
                                viewBox="0 0 24 44"
                                preserveAspectRatio="none"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                            </svg>
                            <a
                                href={page.href}
                                className="ml-4 text-sm md:text-base font-medium"
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
