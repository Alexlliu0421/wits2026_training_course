import type { Order, ApiResponse } from '@/types'
const BASE_URL = 'https://api.example.com'
export async function createOrder(userId: string): Promise<ApiResponse<Order>> {
  const res = await fetch(`${BASE_URL}/v1/orders`, { method: 'POST' })
  const data = await res.json()
  return { success: true, data, message: '訂單建立成功' }
}
