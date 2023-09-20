import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

export const fetchAuthLogin = createAsyncThunk(
    'auth/fetchAuthLogin',
    async (data) => {
        const response = await axios.post('/auth/login', data)
        return response.data
    }
)
export const fetchAuthRegistration = createAsyncThunk(
    'auth/fetchAuthRegistration',
    async (data) => {
        const response = await axios.post('/auth/registration', data)
        return response.data
    }
)

export const fetchAuthUser = createAsyncThunk(
    'auth/fetchAuthUser',
    async () => {
        const response = await axios.get('/auth/user')
        return response.data
    }
)

export const STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
}

const initialState = {
    authLogin: null,
    authRegistration: null,
    status: STATUS.LOADING,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state, action) {
            state.authLogin = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogin.pending, (state) => {
                state.status = STATUS.LOADING
                state.authLogin = null
            })
            .addCase(fetchAuthLogin.fulfilled, (state, action) => {
                state.authLogin = action.payload
                state.status = STATUS.SUCCESS
            })
            .addCase(fetchAuthLogin.rejected, (state) => {
                state.status = STATUS.ERROR
                state.authLogin = null
            })

            .addCase(fetchAuthRegistration.pending, (state) => {
                state.status = STATUS.LOADING
                state.authLogin = null
            })
            .addCase(fetchAuthRegistration.fulfilled, (state, action) => {
                state.authLogin = action.payload
                state.status = STATUS.SUCCESS
            })
            .addCase(fetchAuthRegistration.rejected, (state) => {
                state.status = STATUS.ERROR
                state.authLogin = null
            })

            .addCase(fetchAuthUser.pending, (state) => {
                state.status = STATUS.LOADING
                state.authLogin = null
            })
            .addCase(fetchAuthUser.fulfilled, (state, action) => {
                state.authLogin = action.payload
                state.status = STATUS.SUCCESS
            })
            .addCase(fetchAuthUser.rejected, (state) => {
                state.status = STATUS.ERROR
                state.authLogin = null
            })
    },
})

export const { logout, setStatus } = authSlice.actions

export default authSlice.reducer
