import React, { useId } from 'react'

const Input = React.forwardRef( function Input( {
    label,
    type = 'text',
    placeholder = 'Enter Username',
    className = '',
    ...props
}, ref ) {

    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-2 text-gray-700 pl-1'
                htmlFor={props.id}>
                {label}
            </label>
            }
            <input type={type}
                className={`px-3 py-2 rounded l bg-white text-black outline-none border-gray-200 w-full 
                     ${className}`}
                     ref={ref} 
                    {...props}
                    id = {id}     
            />  
        </div>
    )
} )

export default Input
