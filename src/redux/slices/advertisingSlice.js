import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchAdvertising = createAsyncThunk(
    'posts/fetchAdvertising',
    async (data) => {
        const response = await axios.get('/advertising')
        return response.data
    }
)

const STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

const initialState = {
    advertising: [],
    advertisingStatus: STATUS.LOADING,
}

const advertisingSlice = createSlice({
    name: 'advertising',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvertising.pending, (state) => {
                state.advertisingStatus = STATUS.LOADING
                state.advertising = []
            })
            .addCase(fetchAdvertising.fulfilled, (state, action) => {
                state.advertising = action.payload
                state.advertisingStatus = STATUS.SUCCESS
            })
            .addCase(fetchAdvertising.rejected, (state) => {
                state.advertisingStatus = STATUS.ERROR
                state.advertising = []
            })
    },
})

export default advertisingSlice.reducer
