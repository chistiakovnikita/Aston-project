import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GrView } from 'react-icons/gr'
import Spinner from '../../Spinner'
import { fetchSinglePost } from '../../../redux/slices/postsSlice'
import './singlePostPage.scss'

const SinglePostPage = () => {
    const dispatch = useDispatch()
    const { singlePost, singlePostStatus } = useSelector(
        (state) => state.postsSlice
    )
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchSinglePost(id))
    }, [dispatch, id])

    return (
        <section className="section">
            <div className="container">
                {singlePostStatus === 'loading' ? (
                    <Spinner />
                ) : (
                    <div className="single-post">
                        <div className="single-post__header">
                            <h1 className="single-post__title">
                                {singlePost.title}
                            </h1>

                            <img
                                className="single-post__img"
                                src={`http://localhost:5555${singlePost.image}`}
                                alt="pic"
                            ></img>
                        </div>
                        <div className="single-post__content">
                            <div className="post__author">
                                {singlePost.author.avatar ? (
                                    <img
                                        className="post__avatar"
                                        src={singlePost.author.avatar}
                                        alt="pic"
                                    ></img>
                                ) : (
                                    ''
                                )}

                                <span className="single-post__username">
                                    {singlePost.author.username}
                                </span>
                            </div>
                            <p className="single-post__text">
                                {singlePost.text}
                            </p>
                            <div className="single-post__info">
                                <span className="single-post__date">
                                    {singlePost.createdAt.substr(0, 10)}
                                </span>
                                <div className="single-post__qty-views">
                                    <GrView />{' '}
                                    <span>{singlePost.viewsCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SinglePostPage
