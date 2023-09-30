import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { fetchAuthRegistration } from '../../../redux/slices/authSlice'
import { RxAvatar } from 'react-icons/rx'
import Form from '../../Forms/AuthForm'
import InputName from '../../Forms/InputName'

import './registrationPage.scss'

const RegistrationPage = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.authSlice)

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    const submitHandler = async (value) => {
        const data = await dispatch(fetchAuthRegistration(value))
        reset()
        if (!data.payload) {
            return
        }

        if ('token' in data.payload) {
            localStorage.setItem('token', data.payload.token)
        }
    }

    return (
        <div className="registration">
            <h1 className="registration__title">Registration</h1>
            <RxAvatar className="registration__icon" />

            {status === 'success' ? (
                <Navigate to={'/'} />
            ) : (
                <Form
                    inputName={
                        <InputName register={register} errors={errors} />
                    }
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    submitHandler={submitHandler}
                    isValid={isValid}
                    btnText="Зарегистрироваться"
                />
            )}
        </div>
    )
}

export default RegistrationPage
