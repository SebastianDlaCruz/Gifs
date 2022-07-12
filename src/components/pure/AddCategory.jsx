import React from 'react'
import { useState } from 'react'
import '../../css/gifApp.css'
export const AddCategory = ({ addCategory, resetCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 1) return;
        addCategory(inputValue.trim());
        console.log(inputValue.trim())
        setInputValue('');
    }

    return (
        <form className="form" onSubmit={handleSubmit} >
            <input
                type='text'
                placeholder='Buscar Gif'
                value={inputValue}
                onChange={handleInputChange}
                required
            />
            <input type="reset" value="reset" onClick={resetCategories} />
        </form>
    )
}
