import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/posts')
    return response.data
})

export const fetchCreatePost = createAsyncThunk(
    'posts/fetchCreatePosts',
    async (data) => {
        const response = await axios.post('/posts', data)
        return response.data
    }
)
export const fetchSinglePost = createAsyncThunk(
    'posts/fetchSinglePost',
    async (id) => {
        const response = await axios.get(`/posts/${id}`)
        return response.data
    }
)

export const fetchRemovePost = createAsyncThunk(
    'posts/fetchRemovePost',
    async (id) => axios.delete(`/posts/${id}`)
)

const STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

const initialState = {
    posts: [],
    status: STATUS.LOADING,
    singlePost: {},
    singlePostStatus: STATUS.LOADING,
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

            .addCase(fetchRemovePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(
                    (item) => item._id !== action.meta.arg
                )
            })

            .addCase(fetchSinglePost.pending, (state) => {
                state.singlePostStatus = STATUS.LOADING
                state.singlePost = {}
            })
            .addCase(fetchSinglePost.fulfilled, (state, action) => {
                state.singlePost = action.payload
                state.singlePostStatus = STATUS.SUCCESS
            })

            .addCase(fetchSinglePost.rejected, (state) => {
                state.singlePostStatus = STATUS.ERROR
                state.singlePost = {}
            })
    },
})

export default postsSlice.reducer
