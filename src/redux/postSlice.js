import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, addPost, delPost } from './actionCreators';
const initialState = {};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.postList = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.postList.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(delPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(delPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.postList = state.postList.filter(
                    (post) => post.id !== action.payload
                );
            })
            .addCase(delPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default postSlice.reducer;
