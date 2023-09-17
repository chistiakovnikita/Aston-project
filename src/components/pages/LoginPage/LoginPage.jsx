import React from 'react'
import './loginPage.scss'

const LoginPage = () => {
    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form className="login__form">
                <input
                    type="email"
                    className="login__email"
                    placeholder="Email"
                ></input>
                <input
                    type="password"
                    className="login__password"
                    placeholder="Password"
                ></input>
                <button className="login__btn">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage
