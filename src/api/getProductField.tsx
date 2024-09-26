
import { FilterTypes } from "@/types/filterTypes";
import { useState, useEffect } from 'react';

export function useProductField() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;
    const [result, setResult] = useState<FilterTypes | null>(null);
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