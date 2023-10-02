import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '../../../utils/axios'
import InputTags from '../InputTags'
import Textarea from '../Textarea'
import InputTitle from '../InputTitle'
import InputFile from '../InputFile'
import { fetchCreatePost } from '../../../redux/slices/postsSlice'
import './createPostForm.scss'

const CreatePostForm = () => {
    const [inputfile, setInputFile] = useState(null)
    const inputFileRef = useRef(null)
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const dispatch = useDispatch()

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' })

    const addFileHandler = (evt) => {
        evt.preventDefault()
        inputFileRef.current.click()
    }

    const submitFileHandler = async (evt) => {
        evt.preventDefault()
        const formData = new FormData()
        const file = inputfile[0]
        formData.append('image', file)
        const response = await axios.post('/upload', formData)
        setImage(response.data.url)
    }
    const submitFormHandler = async (value) => {
        const data = {
            ...value,
            tags: value.tags.split(','),
            image: image,
        }
        const response = await dispatch(fetchCreatePost(data))
        const id = response.payload.post._id
        reset()
        navigate(`/posts/${id}`)
    }
    return (
        <form
            onSubmit={handleSubmit(submitFormHandler)}
            className="create-post-form"
        >
            <InputFile
                inputFileRef={inputFileRef}
                inputfile={inputfile}
                setInputFile={setInputFile}
            />

            <div className="create-post-form__input-file-wrapper">
                <button
                    type="submit"
                    className="create-post-form__add-file"
                    onClick={addFileHandler}
                >
                    Добавить файл
                </button>
                {image && (
                    <img
                        className="create-post-form__image"
                        src={`http://localhost:5555${image}`}
                        alt="pic"
                    ></img>
                )}
            </div>
            <button
                className="create-post-form__btn"
                onClick={submitFileHandler}
                type="submit"
            >
                Загрузить
            </button>
            <InputTitle errors={errors} register={register} />
            <InputTags errors={errors} register={register} />
            <Textarea errors={errors} register={register} />
            <button
                disabled={!isValid}
                type="submit"
                className="create-post-form__submit"
            >
                Создать пост
            </button>
        </form>
    )
}

export default CreatePostForm
