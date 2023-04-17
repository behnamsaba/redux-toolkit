import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
});


export const delPost = createAsyncThunk('posts/deletePosts', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
});



