import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice.js'
import authSlice from './slices/authSlice.js'
const store = configureStore({
    reducer: {
        postsSlice,
        authSlice,
    },
})

export default store
