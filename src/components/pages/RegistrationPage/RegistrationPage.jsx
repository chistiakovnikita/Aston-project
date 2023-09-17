import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import './registrationPage.scss'

const RegistrationPage = () => {
    return (
        <div className="registration">
            <h1 className="registration__title">Registration</h1>
            <RxAvatar className="registration__icon" />
            <form className="registration__form">
                <input
                    type="text"
                    className="registration__input"
                    placeholder="Name"
                ></input>
                <input
                    type="email"
                    className="registration__input"
                    placeholder="Email"
                ></input>
                <input
                    type="password"
                    className="registration__input"
                    placeholder="Password"
                ></input>
                <button className="registration__btn">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}

export default RegistrationPage
