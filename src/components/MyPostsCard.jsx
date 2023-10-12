import { deletePost, updatePost, fetchMyPosts } from "../API";
import { Link } from 'react-router-dom'
import UpdatePost from './UpdatePost.jsx'
import { useState }from 'react'
import MessageCard from './MessageCard.jsx'


export default function MyPostsCard({ post, token, fetchMyPosts, message }) {
    //TODO show messages once send message is functional
    const { _id, title, description, location, price, willDeliver, messages, active} = post;
    const [showForm, setShowForm] = useState(false)
    async function handleClick(_id, token) {
        await deletePost(_id, token);
        await fetchMyPosts();
    }
    async function handleEditClick() {
        // await updatePost(post, _id, token);
        // await fetchMyPosts();
        setShowForm(true);
    }
    return (
      <div className="myPostsCard" key={_id}>
        <h1>{title}</h1>
        <p>
          Description: {description} <br></br>
          Price: {price} <br></br>
          Location: {location} <br></br> 
          Will Deliver: {willDeliver ? "Yes" : "No"}<br></br>
          Active: {active ? "Yes" : "No"}
        </p>
        <div>
          {
            messages.map((message) => (
              <MessageCard 
                key={message._id}
                // post={post}
                token={token}
                message={message}
                />
            ))
          }   
       </div>
        
        <button className="deleteButton" onClick={() => handleClick(_id, token)}>Delete Post</button>
        <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button>
        {showForm && <UpdatePost post={post} token={token} fetchMyPosts={fetchMyPosts} setShowForm={setShowForm}/> }
      </div>
    )
  }