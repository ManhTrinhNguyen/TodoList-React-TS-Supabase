import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { InitialState, Posts } from "./postsType";
import { supabase } from "../../supbase/supabaseClient";
import { useAppDispatch } from "../reduxHooks";
import { useEffect } from "react";

export const initialState: InitialState = {
  posts: [],
  isLoading: false,
  error: '' 
};

// Fetch Posts
const fetchPosts = createAsyncThunk('posts/fetchPosts', async (): Promise<Posts[] | null> => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    console.error(error)
    return null
  }
  return data
})

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Posts[] | null>) => {
        state.isLoading = false;
        state.posts = action.payload
        
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      })
  }
});

// Custom hook for fetching Posts
export const useFetchPosts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
};

export default postsSlice.reducer
