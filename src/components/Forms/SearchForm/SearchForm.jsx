import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../../../redux/slices/searchSlice'
import './searchForm.scss'

const SearchForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm({ mode: 'onBlur' })

    const submitHandler = (value) => {
        dispatch(fetchSearch(value))
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="search-form">
            <input
                className="search-form__input"
                placeholder="поиск..."
                {...register('tags')}
            />
        </form>
    )
}

export default SearchForm
