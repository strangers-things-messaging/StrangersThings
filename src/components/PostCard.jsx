import { useState } from 'react'
import {fetchPosts} from '../API'
import SendMessage from './SendMessage.jsx'
export default function PostCard({ post, token, fetchPosts }) {
    //TODO show messages once send message is functional
    const { _id, title, author, description, location, price, willDeliver, messages, active, isAuthor} = post;
    const [showMessageForm, setShowMessageForm] = useState(false)
    // async function handleClick(_id, token) {
    //   if (isAuthor) {
    //       await deletePost(_id, token);  
    //   }
    //   await fetchPosts();
    // }
    async function handleMessageClick() {
      //TODO show message form
      setShowMessageForm(true)
    }
    return (
      <div className="postCard" key={_id}>
        <h1>{title}</h1>
        <p>Author: {author.username}</p>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <button onClick={() => handleMessageClick()}>Send Message to Seller</button>
        {showMessageForm && <SendMessage post={post} _id={_id} token={token} fetchPosts={fetchPosts} setShowMessageForm={setShowMessageForm}/> }

        {
           // make button function to show message form below post. 
           // must be logged in and not the author to send message
        }
      </div>
    )
  }