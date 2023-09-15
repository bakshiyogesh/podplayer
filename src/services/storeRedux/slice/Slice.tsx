import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { podData,videoData} from 'interface/types';

interface podcastsData{
  podcastData:podData[],
  videoData:Array<videoData>[],
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
      addVideoData:(state,action:PayloadAction<Array<videoData>>)=>{
       state.videoData.push(action.payload);
      },
      addVideoId:(state,action:PayloadAction<number>)=>{
      state.id=action.payload;
      },
      changeAutoPlay:(state,action:PayloadAction<number>)=>{
        // state.videoData.find((item)=>item===action.payload);
        // const videoData = state.videoData.find((item) => item.id === action.payload.id);
      }
    },
  });
  export const{addPodData,addVideoData,addVideoId}=PodcastSlice.actions;
  export default PodcastSlice.reducer; 
  