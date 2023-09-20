import React from 'react'
import './inputPassword.scss'

const InputEmail = (props) => {
    const { register, errors } = props

    return (
        <div className="input-password">
            {errors?.password && (
                <p className="input-password__error">
                    {errors?.password?.message || 'Ошибка'}
                </p>
            )}

            <input
                type="password"
                className="input-password__input"
                placeholder="Password"
                {...register('password', {
                    required: 'password не должно быть пустым',
                    minLength: {
                        value: 5,
                        message: 'минимум 5 символов',
                    },
                })}
            />
        </div>
    )
}

export default InputEmail
