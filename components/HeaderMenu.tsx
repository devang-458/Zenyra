"use client"

import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname();

    return (
        <div className='hidden md:inline-flex items-center gap-7 text-sm font-semibold text-light'>
            {headerData?.map((item) => (
                <Link
                    className={`hover:text-blue-800 flex-row hoverEffect relative group ${pathname === item?.href && "text-blue-800"}`}
                    key={item?.title}
                    href={item?.href}
                >
                    {item.title}
                    <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-800 group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname === item?.href && "w-1/2"}`} />
                    <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-800 group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname === item?.href && "w-1/2"}`} />
                </Link>))}
        </div>
    )
}

export default HeaderMenu