import { useState } from 'react'
import { updatePost, fetchMyPosts } from '../API/index.js'


export default function UpdatePost({ _id, post, token, fetchMyPosts, setShowForm}) {
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const [price, setPrice] = useState(post.price)
    const [location, setLocation] = useState(post.location)
    const [willDeliver, setWillDeliver] = useState(post.willDeliver)

    async function handleSubmit(e) {
        e.preventDefault()
        const updatedPost = {post:{
          title:title,
          description:description,
          price:price,
          location:location,
          willDeliver:willDeliver
        }}
        await updatePost(updatedPost, post._id, token)
        await fetchMyPosts()
        setShowForm(false)
    }

    
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
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <br></br>
            <button className="submit">Submit</button>
        </form>
    )
}