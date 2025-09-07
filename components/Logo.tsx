import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-4xl text-zenyra-black  font-black tracking-wider uppercase hover:text-blue-950 hoverEffect group font-sans", className)}>Zenyr
                <span className='text-blue-600 group-hover:text-blue-950 hoverEffect'>a</span>
            </h2>
        </Link>
    )
}

export default Logo