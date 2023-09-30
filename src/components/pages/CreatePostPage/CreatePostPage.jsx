import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import CreatePostForm from '../../Forms/CreatePostForm'

import './createPostPage.scss'

const CreatePostPage = () => {
    const isAuth = useSelector((state) => state.authSlice.authLogin)

    if (!isAuth) {
        return <Navigate to={'/auth/login'} />
    }

    return (
        <section className="section">
            <div className="container">
                <CreatePostForm />
            </div>
        </section>
    )
}

export default CreatePostPage
