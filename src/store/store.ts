import { configureStore } from '@reduxjs/toolkit';
import PodcastReducer from '../podslice/slice'
export const store = configureStore({
    reducer: {
      podcast:PodcastReducer
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch