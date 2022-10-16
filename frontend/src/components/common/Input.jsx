import { useEffect, useState } from "react"

function Input({ type = 'text', label, value, onChange }) {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        onChange(inputValue);
    }, [inputValue, onChange]);

    return (
        <div className="flex flex-col w-3/4">
            <label htmlFor={label} className='py-1 text-gray-600'>{label}</label>
            <input
                type={type}
                placeholder={label}
                value={value}
                onChange={(e) => setInputValue(e.target.value)}
                id={label}
                className='p-2 border-2 rounded border-gray-700 focus:outline-1' />
        </div>
    )
}

export default Input