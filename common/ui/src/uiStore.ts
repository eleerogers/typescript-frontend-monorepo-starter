import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { UIState } from './'

const initialState = {
  activeBand: 1,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveBand: (state: UIState, action: PayloadAction<number>) => {
      state.activeBand = action.payload
    },
  },
})

export const { setActiveBand } = uiSlice.actions
export const uiReducer = uiSlice.reducer
