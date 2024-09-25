'use client'
import { useGetCategory } from '@/api/getPtoducts'
import { CategoryType } from '@/types/category';
import { ProductType } from '@/types/product';
import { ResponseType } from '@/types/response'
import Link from 'next/link';


const ChooseCategory = () => {

    const { loading, result }: ResponseType<CategoryType[]> = useGetCategory()
    const categories = result || [];
    console.log(categories);

    return (
        <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
            <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoria favorita</h3>
            <div className='grid gap-5 sm:grid-cols-3 text-black'>
                {
                    !loading && result !== undefined && (
                        categories.map((category: CategoryType) => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.slug}`}
                                    className='realtive max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg cursor-pointer'
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                                        alt={category.categoryName}
                                        className='max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110'
                                    />
                                </Link>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default ChooseCategory