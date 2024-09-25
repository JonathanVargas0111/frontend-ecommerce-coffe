'use client'

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { ResponseType } from "@/types/response"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import SkeletonSchema from "./skeleton-schema"
import { ProductType } from "@/types/product"
import { Card, CardContent } from "./ui/card"
import { Expand, ShoppingCart } from "lucide-react"
import IconButton from "./icon-button"
import { useRouter } from "next/navigation"
import Image from "next/image"

const FeaturedProducts = () => {

  const { loading, result }: ResponseType<ProductType[]> = useGetFeaturedProducts()
  const router = useRouter()

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent>
          {
            loading && (
              <SkeletonSchema grid={3} />
            )}
          {result !== null && (

            result.map((product: ProductType) => {

              const { id, images, slug, productName,taste, origin } = product;

              return (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-6">
                        <Image height={200} width={200} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`} alt="Imagen" />
                        <div className="absolute w-full px-6 transition duration-300 opacity-0 group-hover:opacity-100 bottom-4 ">
                          <div className="flex justify-center gap-x-6 text-black">
                            <IconButton onClick={() => router.push(`product/${slug}`)} icon={<Expand size={20} />} className="text-gray-600" />
                            <IconButton onClick={() => console.log("Add item")} icon={<ShoppingCart size={20} />} className="text-gray-600" />
                          </div>
                        </div>
                      </CardContent>
                    <div className="flex flex-col justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center gap-3">
                          <p className="px-3 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{taste}</p>
                          <p className="px-3 py-1 text-white bg-yellow-700 rounded-full w-fit">{origin}</p>
                        </div>
                    </div>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })

          )}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default FeaturedProducts