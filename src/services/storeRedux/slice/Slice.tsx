import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData,videoData} from 'interface/types';

interface podcastsData{
  podcastData:podData[],
  videoData:videoData[],
  id:number
}
 const initialState:podcastsData={
  podcastData:[],
  videoData:[],
  id:0
 }

export const PodcastSlice = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
      addPodData:(state,action:PayloadAction<podData>)=>{
       state.podcastData=[{...action.payload
      }];
      },
      addVideoData:(state,action:PayloadAction<videoData>)=>{
       state.videoData.push(action.payload);
      },
      addVideoId:(state,action:PayloadAction<number>)=>{
      state.id=action.payload;
      }
    },
  });
  export const{addPodData,addVideoData,addVideoId}=PodcastSlice.actions;
  export default PodcastSlice.reducer; 
  