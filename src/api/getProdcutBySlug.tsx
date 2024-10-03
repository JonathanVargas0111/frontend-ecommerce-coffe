import { ProductType } from "@/types/product";
import { useEffect, useState } from "react";

export function useGetProductBySlug(slug: string | string[]) {
    
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;
    const [result, setResult] = useState<ProductType[] | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
                setLoading(false);
            }
        })()
    }, [url])

    return { loading, result, error }
}