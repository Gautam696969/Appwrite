import React from 'react'
import PostForm  from '../components/PostForm'
import { Container } from './components'
function Post() {
    return (
        <div className='py-8'>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}

export default Post
