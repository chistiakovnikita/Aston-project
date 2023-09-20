import React from 'react'
import './inputEmail.scss'

const InputEmail = (props) => {
    const { register, errors } = props

    return (
        <div className="input-email">
            {errors?.email && (
                <p className="input-email__error">
                    {errors?.email?.message || 'Ошибка'}
                </p>
            )}

            <input
                type="email"
                className="input-email__input"
                placeholder="Email"
                {...register('email', {
                    required: 'email не должно быть пустым',
                })}
            />
        </div>
    )
}

export default InputEmail
