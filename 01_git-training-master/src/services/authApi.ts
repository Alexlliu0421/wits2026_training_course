import type { AuthToken, ApiResponse } from '@/types'
const BASE_URL = 'https://api.example.com'
export async function loginRequest(email: string): Promise<ApiResponse<AuthToken>> {
  const res = await fetch(`${BASE_URL}/v1/auth/login`, { method: 'POST' })
  const data = await res.json()
  return { success: true, data, message: '登入成功' }
}
