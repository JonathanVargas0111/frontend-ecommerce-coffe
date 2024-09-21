import React from 'react'
import { Popover } from './ui/popover'
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href={"categories/cafe-molido"} className='block p-5'>Café molido</Link>
        <Link href={"categories/cafe-grano"} className='block p-5'>Café en grano</Link>
        <Link href={"categories/cafe-capsula"} className='block p-5'>Café en cápsulas</Link>
      </PopoverContent>
    </Popover>

  )
}

export default ItemsMenuMobile