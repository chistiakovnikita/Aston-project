import React from 'react'
import './inputName.scss'

const InputName = (props) => {
    const { register, errors } = props

    return (
        <div className="input-name">
            {errors?.username && (
                <p className="input-name__error">
                    {errors?.username?.message || 'Ошибка'}
                </p>
            )}
            <input
                type="text"
                className="input-name__input"
                placeholder="Name"
                {...register('username', {
                    required: 'name не должно быть пустым',
                })}
            ></input>
        </div>
    )
}

export default InputName
