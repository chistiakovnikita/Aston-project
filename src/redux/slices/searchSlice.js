import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchSearch = createAsyncThunk(
    'posts/fetchSearch',
    async (data) => {
        const response = await axios.post('/posts/post', data)
        return response.data
    }
)

const STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

const initialState = {
    foundPost: [],
    foundPostStatus: STATUS.LOADING,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.foundPostStatus = STATUS.LOADING
                state.foundPost = []
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.foundPost = action.payload
                state.foundPostStatus = STATUS.SUCCESS
            })
            .addCase(fetchSearch.rejected, (state) => {
                state.foundPostStatus = STATUS.ERROR
                state.foundPost = []
            })
    },
})

export default searchSlice.reducer
