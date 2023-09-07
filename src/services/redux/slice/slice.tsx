import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData } from '../../../interface/types';

interface podcastsData{
  podcastData:podData[] 
}
 const initialState:podcastsData={
  podcastData:[],
 }

export const PodcastSlice = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
      addPodData:(state,action:PayloadAction<podData>)=>{
        // const itemInCart = state.podcastData.find((item) => item.id === action.payload.id);
            // console.log("itemINCart",itemInCart)
            // if(itemInCart){
            //   return ;
            // }
       state.podcastData=[{...action.payload
      }];
      }
    },
  });
  export const{addPodData}=PodcastSlice.actions;
  export default PodcastSlice.reducer; 
  