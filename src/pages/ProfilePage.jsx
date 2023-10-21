import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import MyPostsCard from '../components/MyPostsCard.jsx'
import { fetchMyPosts } from '../API/index.js'
// import PostForm from '../components/PostForm';


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function ProfilePage({token, message}) {
//make state vars
    // const [filteredPosts, setFilteredPosts] = useState([])
    const [username, setUsername] = useState("")
    const [messages, setMessages] = useState([])
    const [posts, setPosts] = useState([])
    // const [_id, set_Id] = useState("")
//wrap myData in useEffect
    const myData = async () => {
        try {
            const response = await fetch(`${API_URL}/users/me`, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            });
            const result = await response.json();
            // console.log(result);
            setUsername(result.data.username)
            setMessages(result.data.messages)
            setPosts(result.data.posts)
            // setFilteredPosts(result.data.posts)
            // console.log(posts)
            return result
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        myData();
    }, [token])

    const sortedPosts = posts.sort((a, b) => 
        (b.createdAt < a.createdAt) ? -1 : (b.createdAt > a.createdAt) ? 1 : 0
    )  
    console.log(sortedPosts)
    
    return (
        <>
            <div>
                <h1>Welcome {username}!</h1>
                {/* <div>
                    <h1>Create Post</h1>
                    <PostForm token={token}/>
                </div> */}
                <h2 className='yourPosts'>Your posts:</h2>
                <main>
                {
                    sortedPosts.map((post) => (
                        <MyPostsCard 
                            key={post._id}
                            post={post}
                            token={token}
                            message={message}
                            fetchMyPosts={myData}
                            />
                    ))
                }
                </main> 
            </div>
            
            {
                //need edit post button and delete post button only on the posts the user has created
                //need to 
            }
        </>
    )
    
}



