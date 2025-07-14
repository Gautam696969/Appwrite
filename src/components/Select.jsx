import React, { useRef, useId } from 'react'

function Select( {
    option,
    label,
    className = "",
    ...props
}, ref ) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id}></label>}
            <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded l bg-white text-black
             outline-none border-gray-200 w-full 
            ${className}`}>
                {option?.map( ( option ) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ) )}
            </select>
        </div>
    )
}
export default React.forwardRef( Select )
