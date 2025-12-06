import { ref, computed } from 'vue'
import type { Product } from '@/types/Product'
import { fetchProducts } from '@/api/products'

export function useProducts() {
  const products = ref<Product[]>([])
  const search = ref<string>('')

  const filtered = computed<Product[]>(() => {
    const q = search.value.toLowerCase()
    return products.value.filter(p =>
      p.title.toLowerCase().includes(q)
    )
  })

  async function load() {
    products.value = await fetchProducts()
  }

  return {
    products,
    search,
    filtered,
    load,
  }
}
