import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { container, Postform } from './components'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function EditPost() {
    const [post, setPosts] = useState( [] );
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        if ( slug ) {
            appwriteService.getPost( slug ).then( ( post ) => {
                if ( post ) {
                    setPosts( post )
                }
            } )
        } else {
            navigate( '/' )
        }
    }, [slug, navigate] )

    return post ? (
        
        <div className='py-8'>
            <container >
                <Postform post={post} />
            </container>
        </div>
  ) :null
}

export default EditPost
