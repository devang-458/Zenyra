import React, { FC } from 'react'
import Logo from './Logo';
import { headerData } from '@/constants/data';
import Link from 'next/link';
interface SidebaeProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebaeProps> = ({ isOpen, onClose }) => {
    return <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}>
        <div className='min-w-72 max-w-92 bg-black h-screen p-10 border-r border-r-light flex flex-col gap-6 '>
            <div className='flex justify-between items-center gap-5'>
                <Logo className='text-white' />
                <button onClick={onClose}
                    className=' sm:text-black  text-md rounded-full bg-white w-5 h-8 font-bold cursor-pointer hoverEffect'>X</button>
            </div>
            <div className='flex flex-col tracking-wide space-y-3.5 font-semibold'>
                {headerData?.map((item) => (
                    <Link href={item.href}>{item.title}</Link>
                ))}
            </div>
        </div>
    </div>
}

export default SideMenu