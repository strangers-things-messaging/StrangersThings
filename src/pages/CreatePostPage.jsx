import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import PostForm from '../components/PostForm.jsx'
import { createNewPost } from '../API/index.js'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export default function CreatePost({token, setToken}) {

    return (
        <div>
            <h1>Create Post</h1>
            <PostForm token={token}/>
        </div>
    )
}