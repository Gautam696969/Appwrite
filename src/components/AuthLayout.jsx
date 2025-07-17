import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import auth from '../appwrite/auth';
export default function Protected( { children, authentication
    = true } ) {
    const navigate = useNavigate();
    const [Loader, setLoader] = useState( true );
    const authStatus = useSelector( state => state.auth.status )
    useEffect( () => {
        if ( authentication && authStatus !== authentication ) {
            navigate( './login' );
        } else {
            !authentication && authStatus !== authentication
            navigate( './' )
        }
        setLoader( false )
    }, [authStatus, navigate, authentication] )
    return Loader ? <h1>Loading...</h1> : <>{children}</>


}


