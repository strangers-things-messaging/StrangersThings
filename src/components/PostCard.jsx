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

    if (token && !isAuthor) {
      return (
        <div className="postCard" key={_id}>
          <h2>{title}</h2>
          <p>
            <b>Author:</b> {author.username}
            <br></br>
            <b>Description:</b> {description}
            <br></br>
            <b>Price:</b> {price} 
            <br></br>
            <b>Location:</b> {location} 
            <br></br>
            <b>Will Deliver:</b> {willDeliver ? "Yes" : "No"}
            <br></br>
          </p>
           
            <button onClick={() => handleMessageClick()}>Send Message to Seller</button>
            {showMessageForm && <SendMessage post={post} _id={_id} token={token} fetchPosts={fetchPosts} setShowMessageForm={setShowMessageForm}/> }
            <br></br>
          {
            // make button function to show message form below post. 
            // must be logged in and not the author to send message
          }
        </div>
        
      )
      } else if (token && isAuthor) {
            return (
              <div className="postCard" key={_id}>
                <h2>{title}</h2>
                <p>
                  <b>Author:</b> {author.username}
                  <br></br>
                  <b>Description:</b> {description}
                  <br></br>
                  <b>Price:</b> {price} 
                  <br></br>
                  <b>Location:</b> {location} 
                  <br></br>
                  <b>Will Deliver:</b> {willDeliver ? "Yes" : "No"}
                  <br></br>
                </p>
                <br></br>
              </div>
              
            )
    } else if (!token) {
      return (
        <div className="postCard" key={_id}>
        <h2>{title}</h2>
        <p>
          <b>Author:</b> {author.username}
          <br></br>
          <b>Description:</b> {description}
          <br></br>
          <b>Price:</b> {price} 
          <br></br>
          <b>Location:</b> {location} 
          <br></br>
          <b>Will Deliver:</b> {willDeliver ? "Yes" : "No"}
          <br></br>
        </p>
        </div>
      )
    }

  }