import React, { FC } from 'react'
import Logo from './Logo'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'
import { useOutsideClick } from '@/hooks'

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname()
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)

    return (
        <div
            className={`fixed inset-y-0 left-0 z-50 w-full h-screen bg-black/50 text-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } hoverEffect`}
        >
            <div
                ref={sidebarRef}
                className="min-w-72 max-w-92 bg-black h-screen p-10 border-r border-r-light flex flex-col gap-6"
            >
                {/* Header */}
                <div className="flex justify-between items-center gap-5">
                    <Logo className="text-white" />
                    <button
                        onClick={onClose}
                        className="text-black text-md rounded-full bg-white w-8 h-8 font-bold cursor-pointer hover:bg-gray-200 transition"
                    >
                        X
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col tracking-wide space-y-3.5 font-semibold">
                    {headerData?.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className={`hover:text-zenyra-light transition ${pathname === item.href ? 'text-zenyra-gold' : ''
                                }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Social Links */}
                <div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}

export default SideMenu
