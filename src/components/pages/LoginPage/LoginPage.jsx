import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { fetchAuthLogin } from '../../../redux/slices/authSlice'
import Form from '../../Forms/AuthForm'
import './loginPage.scss'

const LoginPage = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.authSlice)

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    const submitHandler = async (value) => {
        const data = await dispatch(fetchAuthLogin(value))
        reset()
        if (!data.payload) {
            return
        }

        if ('token' in data.payload) {
            localStorage.setItem('token', data.payload.token)
        }
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>

            {status === 'success' ? (
                <Navigate to={'/'} />
            ) : (
                <Form
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    submitHandler={submitHandler}
                    isValid={isValid}
                    btnText="Войти"
                />
            )}
        </div>
    )
}

export default LoginPage
