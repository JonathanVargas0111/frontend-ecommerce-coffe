'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Heart, ShoppingCart, User } from 'lucide-react'
import MenuList from './menu-list'
import ItemsMenuMobile from './items-menu-mobile'

const NavBar = () => {

    const router = useRouter()

    return (
        <div className='flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl'>
            <h1 className='text-3xl' onClick={() => router.push("/")}>
                Coffe <span className='font-bold'> Dev</span>
            </h1>
            {/* Mobile */}
            <div className='flex md:hidden'>
                <ItemsMenuMobile/>
            </div>
            {/*  Desktop */}
            <div className='items-center justify-between hidden md:flex'>
                <MenuList/>
            </div>

            <div className='flex items-center justify-between gap-2 sm:gap-7'>
                <ShoppingCart 
                    strokeWidth="1" 
                    className='cursor-pointer' 
                    onClick={() => router.push("/cart")} />
                <Heart
                    strokeWidth={1}
                    className='cursor-pointer'
                    onClick={() => router.push("/loved-products")} />
                <User
                    strokeWidth={1}
                    className='cursor-pointer' />
            </div>
        </div>
    )
}

export default NavBar