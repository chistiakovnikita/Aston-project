import React from 'react'
import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner">
            <span className="spinner__animation"></span>
            <span className="spinner__text">Loading...</span>
        </div>
    )
}

export default Spinner
