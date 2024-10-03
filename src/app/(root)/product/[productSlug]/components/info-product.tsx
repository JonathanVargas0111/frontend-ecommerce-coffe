import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/formatPrice'
import { ProductType } from '@/types/product'
import { Heart } from 'lucide-react'
import React from 'react'

export type InfoProduct={
    product:ProductType
}

const InfoProduct = ( props:InfoProduct) => {
  const {product} = props  
    return (
    <div className='px-6'>
        <div className='justify-between pb-3 sm:flex'>
            <h1 className='text-2xl'>{product.productName}</h1>
            <div className='flex items-center justify-between gap-3'>
                <p className='px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit'>
                    {product.taste}
                </p>
                <p className='px-2 py-1 text-xs text-white bg-yellow-900 rounded-full'>{product.origin}</p>
            </div>
        </div>
        <Separator/>
        <p className='py-4'>{product.description}</p>
        <Separator/>
        <p className='my-4 text-2xl'>{formatPrice(product.price)}</p>
        <div className='flex items-center gap-5'>
            <Button className='bg-black text-white dark:bg-white dark:text-black'
                onClick={()=>console.log(`Comprar ${product.productName}`)}            >
                Comprar
            </Button>
            <Heart width={30} strokeWidth={1} className='transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white'
                onClick={()=>console.log("Add to love products")}
            />
        </div>
    </div>
  )
}

export default InfoProduct