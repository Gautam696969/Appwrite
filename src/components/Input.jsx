import React, { useId } from 'react'

const Input = React.forwardRef( function Input( {
    label,
    type = 'text',
    placeholder = 'Enter Username',
    className = '',
    ...props
} ) {

    return (
        <div className='w-full'>
            {label && <label
                className='inline-bloch mb-2 text-gray-700 pl-1'
                htmlFor={props.id}>
                    {label}
            </label>
            }
        </div>
    )
} )

export default Input
