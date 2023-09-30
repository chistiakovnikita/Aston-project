import React from 'react'
import './advertising.scss'
import { Link } from 'react-router-dom'

const Advertising = (props) => {
    const { image, address, contact, title, url } = props.advertising
    return (
        <div className="advertising">
            <Link to={url}>
                <img src={image} alt="pic" className="advertising__img"></img>
            </Link>
            <div className="advertising__info">
                <h3 className="advertising__info-title">{title}</h3>
                <p> {address}</p>
                <p> {contact}</p>
            </div>
        </div>
    )
}

export default Advertising
