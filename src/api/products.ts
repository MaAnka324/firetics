import type { Product } from '@/types/Product'

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('https://dummyjson.com/products?limit=100')
  const data = await response.json()

  const result: Product[] = new Array(10000)
    .fill(null)
    .map((_, index) => data.products[index % 100])

  return result
}
