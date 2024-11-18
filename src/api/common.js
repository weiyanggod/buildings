import request from '@/utils/https.js'

export const text = () => {
  return request.get('/todos/1')
}
