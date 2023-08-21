import { useState, useEffect } from 'react'

import { fetchPosts } from '../API/index.js'
import PostCard from '../components/PostCard.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export default function Posts({token}) {
    const [posts, setPosts] = useState([])
   
    async function fetchData(token) {
        const data = await fetchPosts(token)
        setPosts(data)
    }
    useEffect(() => {
        fetchData(token)
    }, [token]) 
    
    return (
        <>
            
            <h1>Posts</h1>
            <main>
            {
                posts.map((post) => (
                    <PostCard 
                        key={post._id}
                        post={post}
                        token={token}
                        fetchPosts={fetchData}
                        />
                ))
            }
            </main>
        </>
        
    )
}