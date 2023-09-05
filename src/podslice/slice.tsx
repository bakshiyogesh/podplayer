import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData } from '../interface/interface';

interface podcastsData{
  podcastData:podData[] 
  audioId:number;
}
 const initialState:podcastsData={
  podcastData:[],
  audioId:0
 }

export const podcastSlice = createSlice({
    name: 'podcast',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      addPodData:(state,action:PayloadAction<podData>)=>{
        const itemInCart = state.podcastData.find((item) => item.id === action.payload.id);
            // console.log("itemINCart",itemInCart)
            if(itemInCart){
              return ;
            }
       state.podcastData.push(action.payload);
       state.audioId=0;
      }
    },
  });
  export const{addPodData}=podcastSlice.actions;
  export default podcastSlice.reducer; 
  