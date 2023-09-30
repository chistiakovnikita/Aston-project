import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice.js'
import authSlice from './slices/authSlice.js'
import searchSlice from './slices/searchSlice.js'
import advertisingSlice from './slices/advertisingSlice.js'
const store = configureStore({
    reducer: {
        postsSlice,
        authSlice,
        searchSlice,
        advertisingSlice,
    },
})

export default store
