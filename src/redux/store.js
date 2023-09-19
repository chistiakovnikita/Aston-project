import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './slices/postsSlice.js'
const store = configureStore({
    reducer: {
        postsSlice,
    },
})

export default store
