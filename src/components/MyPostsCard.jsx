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
        <h2>{title}</h2>
        <p>
          <b>Description:</b> {description} <br></br>
          <b>Price:</b> {price} <br></br>
          <b>Location:</b> {location} <br></br> 
          <b>Will Deliver:</b> {willDeliver ? "Yes" : "No"}<br></br>
          <b>Active:</b> {active ? "Yes" : "No"}
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
        <div>
          <button className="deleteButton" onClick={() => handleClick(_id, token)}>Delete Post</button>
          <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button>
        </div>
        {showForm && <UpdatePost post={post} token={token} fetchMyPosts={fetchMyPosts} setShowForm={setShowForm}/> }
      </div>
    )
  }