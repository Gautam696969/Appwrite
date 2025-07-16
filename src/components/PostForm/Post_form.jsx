import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '..Index/'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
function Post_form( { post } ) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm( {
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      Status: post?.Status || 'active',

    },
  } )
  const navigate = useNavigate();
  const userData = useSelector( state => state.user.userData )
  const submit = async ( data ) => {
    if ( post ) {
      data.image[0] ? appwriteService.uploadFile( data.image[0] ) : null

      if ( file ) {
        appwriteService.deleteFile( post.featuredImage )

        const dbPost = await appwriteService.updatePost( post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,

          if( dbPost ) {
            navigate( `/post/${dbPost.$id}` )
          }
        } )
      }

    }
  }
  const slugTransport = useCallback( ( value ) => {
    if ( value && typeof value === 'string' )
      value
        .trim()
        .toLowerCase()
        .replace( /[^a-z0-9\-]/g, '' )
    return ''
  }, [] )
  return (
    <div>

    </div>
  )
}

export default Post_form
