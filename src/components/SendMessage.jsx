import { useState } from 'react'
import { postMessage, fetchPosts } from '../API/index.js'

export default function SendMessage({ post, _id, token, fetchPosts, setShowMessageForm}) {
    const [message, setMessage] = useState([])
    const [content, setContent] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const newMessage = {message:{
            content:content
        }}
        
        await postMessage(post._id, token, newMessage)
        await fetchPosts()
        setShowMessageForm(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message: </label>
            <textarea
                type="text"
                id="description"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="submit">Submit</button>
        </form>
    )
}