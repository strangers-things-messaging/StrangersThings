import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import MyPostsCard from '../components/MyPostsCard.jsx'
import { fetchMyPosts } from '../API/index.js'


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function ProfilePage({token, message}) {
//make state vars
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
            // console.log(posts)
            return result
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        myData();
    }, [token])
    return (
        <>
        {
        //use state here
        }
            <div>
         
                <p>Welcome {username}!</p>
            <main>
            {
                posts.map((post) => (
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



