import { useAppDispatch, useAppSelector } from '@mono/core'
import { togglePlaceholder } from '@mono/ui'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import React from 'react'

export const Placeholder = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { showPlaceholder } = useAppSelector((state) => state.ui)

  const queryClient = useQueryClient()
  const { isLoading, error, data, refetch } = useQuery<unknown[]>(
    ['queryKey'],
    async () => {
      const response = await fetch('http://localhost:3000/api/v1/')
      if (!response.ok) throw new Error('Server connection error')
      return (await response.json()) as unknown[]
    }
  )

  return (
    <div className="m-5 text-xl text-center">
      <button
        className="w-20 p-2 rounded-md text-sky-50 bg-sky-600 hover:bg-sky-700"
        onClick={() => dispatch(togglePlaceholder())}
      >
        {!showPlaceholder ? 'Show' : 'Hide'}
      </button>
      {showPlaceholder && (
        <div className="m-8 text-6xl font-bold text-sky-600">Hello World</div>
      )}
    </div>
  )
}
