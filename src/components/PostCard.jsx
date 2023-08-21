// import { useState } from 'react'
// import {fetchPosts} from '../API'

export default function PostCard({ post }) {
    //TODO show messages once send message is functional
    const { _id, title, author, description, location, price, willDeliver, messages, active} = post;
    // const [showForm, setShowForm] = useState(false)
    return (
      <div className="postCard" key={_id}>
        <h1>{title}</h1>
        <p>Author: {author.username}</p>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <p>Active: {active ? "Yes" : "No"}</p>
        <button>Send Message to Seller</button>
        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }