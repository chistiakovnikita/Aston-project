import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GrView } from 'react-icons/gr'
import axios from '../../../utils/axios'
import './singlePostPage.scss'
import Spinner from '../../Spinner'

const SinglePostPage = () => {
    const [post, setPost] = useState()
    const { id } = useParams()

    const getPost = useCallback(async () => {
        const response = await axios.get(`/posts/${id}`)
        setPost(response.data)
    }, [id])

    useEffect(() => {
        getPost()
    }, [getPost])

    if (!post) {
        return <Spinner />
    }
    return (
        <section className="section">
            <div className="container">
                <div className="single-post">
                    <div className="single-post__header">
                        <h1 className="single-post__title">{post.title}</h1>

                        <img
                            className="single-post__img"
                            src={post.image}
                            alt="pic"
                        ></img>
                    </div>
                    <div className="single-post__content">
                        <div className="post__author">
                            <img
                                className="single-post__avatar"
                                src={post.author.avatar}
                                alt="pic"
                            ></img>

                            <span className="single-post__username">
                                {post.author.username}
                            </span>
                        </div>
                        <p className="single-post__text">{post.text}</p>
                        <div className="single-post__info">
                            <span className="single-post__date">
                                {post.createdAt.substr(0, 10)}
                            </span>
                            <div className="single-post__qty-views">
                                <GrView /> <span>{post.viewsCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePostPage
