import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CardIcon from './CardIcon'
import FavoriteButton from './FavoriteButton'
import Signin from './Signin'
import MobileMenu from './MobileMenu'

const Header = () => {
    return (
        <header className=' sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md'>
            <Container className='relative flex flex-row items-center justify-between'>
                <div className='w-auto md:w-1/3 md:gap-0 flex items-center gap-2.5 justify-start '>
                    <MobileMenu />
                    <Logo />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <HeaderMenu />
                </div>
                <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
                    <SearchBar />
                    <CardIcon />
                    <FavoriteButton />
                    <Signin />
                </div>
            </Container>
        </header>
    )
}

export default Header