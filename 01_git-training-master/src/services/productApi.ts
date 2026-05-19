import type { Product, ApiResponse } from '@/types'
const BASE_URL = 'https://api.example.com'
export async function fetchProducts(): Promise<ApiResponse<Product[]>> {
  const res = await fetch(`${BASE_URL}/v1/products`)
  const data = await res.json()
  return { success: true, data, message: 'ok' }
}
