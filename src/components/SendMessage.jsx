import { useState } from 'react'
import { postMessage, fetchPosts } from '../API/index.js'

export default function SendMessage({_id, token, fetchPosts, setShowMessageForm}) {
    const [message, setMessage] = useState("")
    async function handleSubmit() {
        await postMessage(_id, token)
        await fetchPosts()
        setShowMessageForm(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="message">Message: </label>
            <textarea
                type="text"
                id="description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button className="submit">Submit</button>
        </form>
    )
}