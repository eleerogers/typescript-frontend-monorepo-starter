import { store } from '@mono/core'

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'styles/index.css'

import App from './App'

const rootNode = document.querySelector('#root')
if (rootNode) {
  createRoot(rootNode).render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  )
}
