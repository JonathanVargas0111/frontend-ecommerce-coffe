import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonProduct = () => {
  return (
    <div className='grid sm.grid-cols-2 sm:py-16 sm:p-y40'>
        <Skeleton className='h-[200px] w-[300px] rounded-xl'/>
        <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]'/>
            <Skeleton className='h-4 w-[250px]'/>
            <Skeleton className='h-4 w-[250px]'/>
            <Skeleton className='h-4 w-[250px]'/>
        </div>
    </div>
  )
}

export default SkeletonProduct