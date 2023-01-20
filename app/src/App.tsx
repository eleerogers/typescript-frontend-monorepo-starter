import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Placeholder } from 'components/placeholder'
import React from 'react'

export default function App(): JSX.Element {
  return (
    <div id="App">
      <QueryClientProvider client={new QueryClient()}>
        <Placeholder />
      </QueryClientProvider>
    </div>
  )
}
