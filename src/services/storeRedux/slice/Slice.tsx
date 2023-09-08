import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData } from '@type/types';

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
       state.podcastData=[{...action.payload
      }];
      }
    },
  });
  export const{addPodData}=PodcastSlice.actions;
  export default PodcastSlice.reducer; 
  