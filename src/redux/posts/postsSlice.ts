import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { InitialState, Posts } from "./postsType";
import { supabase } from "../../supbase/supabaseClient";
import { useAppDispatch } from "../reduxHooks";
import { useEffect } from "react";

interface AddPostsPayload {
  text: string;
  user_id: string
}

export const initialState: InitialState = {
  posts: [],
  isLoading: false,
  error: '' 
};

// Fetch Posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (): Promise<Posts[] | null> => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    console.error(error)
  }
  return data
});

// Add Post
export const addPost = createAsyncThunk('posts/addPost', async (payload: AddPostsPayload): Promise<Posts[] | null> => {
  const { text, user_id } = payload;
  
  const newPost = {
    todo: text,
    created_at: new Date().toLocaleString(),
    completed: false,
    user_id: user_id
  }
  const { data, error } = await supabase.from('posts').insert([newPost]).select();
  if (error) {
    console.error(error)
  }
  return data;
});

// Delete Post
export const deletePost = createAsyncThunk('posts/deletePost', async (id: number): Promise<number> => {

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error(error)
  }
  return id
});

// Update Post
export const updatePost = createAsyncThunk('posts/updatePost', async (updateData: Posts): Promise<Posts> => {
  const { error } = await supabase
    .from('posts')
    .update({ completed: updateData.completed })
    .eq('id', updateData.id)
    .select();
  
  if (error) {
    console.error(error)
  }

  return updateData
});

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Posts
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
      // Add Post
      .addCase(addPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Posts[] | null>) => {
        state.isLoading = false;
        if (action.payload === null) return;
        state.posts?.push(action.payload[0]);

      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      })
      // Delete Post
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.isLoading = false
        if (!action.payload) {
          console.log('Delete could not complete')
          console.log(action.payload);
          return
        }
        const posts = state.posts?.filter(post => post.id !== action.payload);
        
        if (posts !== undefined) {
          state.posts = posts
        }
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      })
      // Update Post
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Posts | null>) => {
        state.isLoading = false
        if (!action.payload) {
          console.log('Updated could not complete')
          console.log(action.payload);
          return
        }
        const posts = state.posts?.map(post => (
          post.id === action.payload?.id ? action.payload : post
        ))

        if (posts !== undefined) {
          state.posts = posts
        }
        
    })
    .addCase(updatePost.rejected, (state, action) => {
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
