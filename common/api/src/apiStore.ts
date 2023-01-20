export const getItems = async <T>(): Promise<T[]> => {
  const response = await fetch('http://localhost:3000/api/v1/items?')
  if (!response.ok) throw new Error('Server connection error')
  const data: T[] = await response.json()
  return data
}

export const postItems = async (
  body: Record<string, unknown>
): Promise<Response> => {
  return fetch('http://localhost:3000/api/v1/items?', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
