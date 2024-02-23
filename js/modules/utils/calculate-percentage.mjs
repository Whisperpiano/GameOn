export function getPercentage(price, discountedPrice) {
    return Number(((price - discountedPrice) / price) * 100).toFixed(0)
}
