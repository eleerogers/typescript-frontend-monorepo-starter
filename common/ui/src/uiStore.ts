import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@mono/core'
import type { UIState } from '.'

const initialState = {
  showPlaceholder: true,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    togglePlaceholder: (
      state: UIState,
      action: PayloadAction<boolean | undefined>
    ) => {
      state.showPlaceholder = action.payload ?? !state.showPlaceholder
    },
  },
})

export const selectUI = (state: RootState): UIState => state.ui
export const uiReducer = uiSlice.reducer
export const { togglePlaceholder } = uiSlice.actions
