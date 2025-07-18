import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import Logo from './Logo'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState( null );
    const login = async ( data ) => {
        setError( " " );
        try {
            const session = await authService.login( data );
            if ( session ) {
                const userData = await authService
                getCurrentUser();
                if ( userData ) dispatch( authLogin( userData ) )
                navigate( '/' )
            }
        } catch ( error ) {
            setError( error.message )
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg
                bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign into your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-500 
                text-center'>{error}</p>}
                <form onSubmit={handleSubmit( login )}
                    className='mt-8'>
                    <div className='space-y-5'>
                        <input
                            label='Email'
                            placeholder='Enter you email'
                            type='email'
                            {...register( 'email', {
                                required: true,
                                validate: {
                                    matchPater: ( value ) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.
                                        test( value ) ||
                                        'Email address must be a user valid address',
                                }
                            } )}
                        />

                        <input
                            label='password'
                            placeholder='Enter password'
                            type='password'
                            {...register( 'password',{
                                required: true
                            } )}
                        />
                        
                        <button
                            type='submit'
                            className='w-full' >
                            Sing in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
