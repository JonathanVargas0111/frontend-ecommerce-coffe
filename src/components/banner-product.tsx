import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

const BannerProduct = () => {
    return (
        <>
            <div className='mt-4 text-center'>
                <p >Sumérgte en una experiencia única</p>
                <h4 className='mt-2 text-5xl font-extrabold upperce'>CaféExquisito</h4>
                <p className='p-y-2 text-lg'>Despierta tus sentidos con cada sorbo</p>
                <Link href="#" className={buttonVariants()}>Comprar</Link>
            </div>
            <div className='h-[350px] md:h-[600px] bg-[url("/slider-image.jpg")] bg-no-repeat bg-center mt-5'></div>
        </>
    )
}

export default BannerProduct