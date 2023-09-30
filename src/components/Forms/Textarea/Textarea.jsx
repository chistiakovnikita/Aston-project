import React from 'react'
import './textarea.scss'

const Textarea = ({ errors, register }) => {
    return (
        <div>
            {errors?.text && (
                <p className="input-email__error">
                    {errors?.text?.message || 'Ошибка'}
                </p>
            )}
            <textarea
                type="text"
                className="create-post-form__textarea"
                placeholder="Введите текст статьи"
                {...register('text', {
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

export default Textarea
