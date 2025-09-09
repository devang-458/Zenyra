import { HeartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
    return <Link href={"/cart"} className='group relative'>
        <HeartIcon className='w-5 h-5 hover:text-white hoverEffect' />
        <span className='absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center '>0</span>
    </Link>

}

export default FavoriteButton