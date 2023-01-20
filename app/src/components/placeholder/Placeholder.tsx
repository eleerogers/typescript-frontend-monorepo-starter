import { useAppDispatch, useAppSelector } from '@mono/core'
import { togglePlaceholder } from '@mono/ui'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { getItems, postItems } from '@mono/api'
import React from 'react'

export const Placeholder = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { showPlaceholder } = useAppSelector((state) => state.ui)

  const queryClient = useQueryClient()
  const { isLoading, error, data, refetch } = useQuery<unknown[]>({
    queryKey: ['items'],
    queryFn: getItems,
  })

  const mutation = useMutation<unknown[]>({
    mutationFn: postItems,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['items'] })
    },
  })

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
