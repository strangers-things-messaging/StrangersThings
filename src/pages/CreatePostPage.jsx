import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export default function CreatePost({token}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [willDeliver, setWillDeliver] = useState("")
    
    useEffect(() => {
        const makePost = async () => {

            try {
                const response = await fetch(
                    POSTS_ENDPOINT, 
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            post: {
                                title,
                                description,
                                price,
                                location,
                                willDeliver
                            }
                        })
                    }
                );
                const result = await response.json();
                console.log(result);
                setTitle(result.data.posts.title)
                return result
            } catch (err) {
                console.error(err);
            }
        }
    makePost()
    }, [token])
    
    return (
        <div>
            <NavBar />
        </div>
    )
}