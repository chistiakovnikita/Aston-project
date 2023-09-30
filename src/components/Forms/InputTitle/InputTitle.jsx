import React from 'react'
import './inputTitle.scss'

const InputTitle = ({ errors, register }) => {
    return (
        <div>
            {errors?.title && (
                <p className="input-email__error">
                    {errors?.title?.message || 'Ошибка'}
                </p>
            )}
            <input
                type="text"
                className="create-post-form__input"
                placeholder="Введите заголовок статьи"
                {...register('title', {
                    required: 'поле не должно быть пустым',
                    minLength: {
                        value: 5,
                        message: 'минимум 5 символов',
                    },
                })}
            />
        </div>
    )
}

export default InputTitle
