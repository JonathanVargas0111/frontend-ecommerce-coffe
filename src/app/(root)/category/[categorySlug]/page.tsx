'use client'
import { useGetCategoryProdcut } from '@/api/getCategoryProduct'
import { ProductType } from '@/types/product'
import { ResponseType } from '@/types/response';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation';
import FilterControlsCategory from './components/filter-controls-catgory';
import SkeletonSchema from '@/components/skeleton-schema';
import ProdcutCart from './components/product-cart';
import { useState } from 'react';

const Page = () => {
  const params = useParams()
  const { categorySlug } = params

  const { result, loading }: ResponseType<ProductType[]> = useGetCategoryProdcut(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState('')
  /* const router = useRouter() */

  const filteredProducts = result ?(
    filterOrigin === '' 
    ? result 
    : result.filter((product: ProductType) =>product.origin === filterOrigin)
  ):null;

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {
        result !== null && !loading && (
          <h1 className='text-3xl font-medium'>Café {result[0].category.categoryName}</h1>
        )
      }
      <Separator />

      <div className='sm:flex sm:justify-between'>
        <FilterControlsCategory setFilterOrigin={setFilterOrigin} />
        <div className='grid gap-5 mt-8 md:grid-cols-3 md:gap-10'>
          {
            loading && (<SkeletonSchema grid={3} />)
          }
          {
            filteredProducts !== null && !loading && (
              filteredProducts.map((product: ProductType) => (
                <ProdcutCart key={product.id} product={product} />
              ))
            )
          }
          {
            filteredProducts !== null && !loading && filteredProducts.length === 0 &&(
              <p>No hay productos con este filtro.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Page