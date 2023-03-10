import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getData } from './api'

export const store = configureStore({
  reducer: {
    [getData.reducerPath]: getData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getData.middleware),
})

setupListeners(store.dispatch)
