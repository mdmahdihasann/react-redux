import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPost } from "./postsApi";

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPost();
    return posts;
});

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true
            state.isError = false
        })
        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.isLoading =false
            state.isError = true
            state.error = action.error?.message || "unknow error";
        })
    }
})


export default postSlice.reducer;