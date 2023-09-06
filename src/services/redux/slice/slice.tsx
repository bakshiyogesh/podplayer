import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData } from '../../../interface/types';

interface podcastsData{
  podcastData:podData[] 
}
 const initialState:podcastsData={
  podcastData:[],
 }

export const podcastSlice = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
      addPodData:(state,action:PayloadAction<podData>)=>{
        // const itemInCart = state.podcastData.find((item) => item.id === action.payload.id);
            // console.log("itemINCart",itemInCart)
            // if(itemInCart){
            //   return ;
            // }
       state.podcastData.push(action.payload);
      }
    },
  });
  export const{addPodData}=podcastSlice.actions;
  export default podcastSlice.reducer; 
  