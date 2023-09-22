import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice.js'
import authSlice from './slices/authSlice.js'
import searchSlice from './slices/searchSlice.js'
const store = configureStore({
    reducer: {
        postsSlice,
        authSlice,
        searchSlice,
    },
})

export default store
