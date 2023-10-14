import { useState, useEffect } from 'react'

import { fetchPosts } from '../API/index.js'
import PostCard from '../components/PostCard.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export default function Posts({token}) {
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
   
    async function fetchData(token) {
        const data = await fetchPosts(token)
        setPosts(data)
        setFilteredPosts(data)
    }
    useEffect(() => {
        fetchData(token)
    }, [token]) 
    function handleSubmit(e) {
        e.preventDefault()
        const search = e.target.value;
        const filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredPosts(filteredPosts)
    }
    return (
        <>
            
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search</label>
                <input onChange={handleSubmit} type="text" id="search" />
            </form>
            <main>
            {
                filteredPosts.map((post) => (
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