import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/posts')
    return response.data
})

const STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

const initialState = {
    posts: [],
    status: STATUS.LOADING,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = STATUS.LOADING
                state.posts = []
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.status = STATUS.SUCCESS
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = STATUS.ERROR
                state.posts = []
            })
    },
})

export default postsSlice.reducer
