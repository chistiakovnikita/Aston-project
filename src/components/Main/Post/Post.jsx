import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GrView } from 'react-icons/gr'
import { IoCreateOutline } from 'react-icons/io5'
import { AiOutlineDelete } from 'react-icons/ai'
import { fetchRemovePost } from '../../../redux/slices/postsSlice'
import './post.scss'

const Post = ({ post, isVisible }) => {
    const dispatch = useDispatch()

    const removePostHandler = async () => {
        dispatch(fetchRemovePost(post._id))
    }

    return (
        <div className="post">
            <div className="post__header">
                <Link to={`/posts/${post._id}`}>
                    <h1 className="post__title">{post.title}</h1>
                    <img
                        className="post__img"
                        src={`http://localhost:5555${post.image}`}
                        alt="pic"
                    ></img>
                </Link>

                {isVisible && (
                    <div className="post__control">
                        <button>
                            <IoCreateOutline className="post__control-icon" />
                        </button>
                        <button>
                            <AiOutlineDelete
                                className="post__control-icon"
                                onClick={removePostHandler}
                            />
                        </button>
                    </div>
                )}
            </div>
            <div className="post__content">
                <div className="post__author">
                    {post.author.avatar ? (
                        <img
                            className="post__avatar"
                            src={post.author.avatar}
                            alt="pic"
                        ></img>
                    ) : (
                        ''
                    )}

                    <span className="post__username">
                        {post.author.username}
                    </span>
                </div>
                <p className="post__text">{post.text}</p>

                <div className="post__info">
                    <span className="post__date">
                        {post.createdAt.substr(0, 10)}
                    </span>
                    <div className="post__qty-views">
                        <GrView /> <span>{post.viewsCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
