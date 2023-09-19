import React from 'react'
import { Link } from 'react-router-dom'
import { GrView } from 'react-icons/gr'
import './post.scss'

const Post = (post) => {
    const { title, text, image, author, createdAt, viewsCount, _id } = post.post

    return (
        <div className="post">
            <div className="post__header">
                <Link to={`/posts/${_id}`}>
                    <h1 className="post__title">{title}</h1>
                    <img className="post__img" src={image} alt="pic"></img>
                </Link>
            </div>
            <div className="post__content">
                <div className="post__author">
                    <img
                        className="post__avatar"
                        src={author.avatar}
                        alt="pic"
                    ></img>

                    <span className="post__username">{author.username}</span>
                </div>
                <p className="post__text">{text}</p>

                <div className="post__info">
                    <span className="post__date">
                        {createdAt.substr(0, 10)}
                    </span>
                    <div className="post__qty-views">
                        <GrView /> <span>{viewsCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
