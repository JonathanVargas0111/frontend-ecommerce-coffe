export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat('es-Es', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
    const finalePrice = priceFormated.format(price)

    return finalePrice

}

