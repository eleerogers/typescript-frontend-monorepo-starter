export const getItems = async <T>(url: string): Promise<T[] | void> => {
  let response: Awaited<ReturnType<typeof fetch>>
  try {
    response = await fetch(url)
    if (!response.ok) throw new Error('Server connection error')
  } catch (e) {
    console.error(e)
    return undefined
  }
  return (await response.json()) as T[]
}

export const postItems = async (
  url: string,
  body: Record<string, unknown> & BodyInit
): Promise<Response> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
