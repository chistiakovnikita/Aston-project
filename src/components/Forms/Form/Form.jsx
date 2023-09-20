import React from 'react'
import InputEmail from '../InputEmail'
import InputPassword from '../InputPassword'
import './form.scss'

const Form = (props) => {
    const {
        handleSubmit,
        submitHandler,
        register,
        errors,
        isValid,
        inputName,
        btnText,
    } = props

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="form">
            {inputName ? inputName : ''}
            <InputEmail register={register} errors={errors} />
            <InputPassword register={register} errors={errors} />
            <button type="submit" className="form__btn" disabled={!isValid}>
                {btnText}
            </button>
        </form>
    )
}

export default Form
