import { configureStore } from '@reduxjs/toolkit';
import MediaMomentumReducer from 'services/storeRedux/slice/Slice'
export const store = configureStore({
    reducer: {
      mediamomentum:MediaMomentumReducer
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch