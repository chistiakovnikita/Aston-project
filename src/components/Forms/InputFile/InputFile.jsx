import React from 'react'
import './inputFile.scss'

const InputFile = ({ inputFileRef, inputfile, setInputFile }) => {
    return (
        <input
            ref={inputFileRef}
            className="create-post-form__input-file"
            type="file"
            file={inputfile}
            onChange={(evt) => setInputFile(evt.target.files)}
            name="image"
        />
    )
}

export default InputFile
