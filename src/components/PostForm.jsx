import { useState } from 'react'
import { createNewPost } from '../API/index.js'

export default function PostForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("On Request")
    const [willDeliver, setWillDeliver] = useState("Yes")

    async function handleSubmit(e) {
        e.preventDefault()
        const newPost = {
          title,
          description,
          price,
          location,
          willDeliver
        }
        await createNewPost(newPost)
        setTitle('')
        setDescription('')
        setPrice('')
        setLocation('On Request')
        setWillDeliver('Yes')
        // fetchPosts()
    }
    //TODO send success message if successfully created post, send error message if errors
    //TODO once post is created, route to profile page
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br></br>
            <label htmlFor="description">Description: </label>
            <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br></br>
            <label htmlFor="location">Location: </label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <br></br>
            <label htmlFor="willDeliver">Will Deliver: </label>
            <select
                id="willDeliver"
                value={willDeliver}
                onChange={(e) => setWillDeliver(e.target.value)}
            >
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <br></br>
            <button className="submit">Submit</button>
        </form>
    )
}