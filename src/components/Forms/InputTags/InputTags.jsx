import React from 'react'
import './inputTags.scss'

const InputTags = ({ errors, register }) => {
    return (
        <div>
            {errors?.tags && (
                <p className="input-email__error">
                    {errors?.tags?.message || 'Ошибка'}
                </p>
            )}
            <input
                type="text"
                className="input-email__input"
                placeholder="Тэги"
                {...register('tags', {
                    required: 'поле не должно быть пустым',
                })}
            />
        </div>
    )
}

export default InputTags
