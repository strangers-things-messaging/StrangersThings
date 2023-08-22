import { deletePost, updatePost, fetchMyPosts } from "../API";
import { Link } from 'react-router-dom'
import UpdatePost from './UpdatePost.jsx'
import { useState }from 'react'


export default function MyPostsCard({ post, token, fetchMyPosts }) {
    //TODO show messages once send message is functional
    const { _id, title, description, location, price, willDeliver, messages, active} = post;
    const [showForm, setShowForm] = useState(false)
    async function handleClick(_id, token) {
        await deletePost(_id, token);
        await fetchMyPosts();
    }
    async function handleEditClick(post, token) {
        // await updatePost(post, _id, token);
        // await fetchMyPosts();
        setShowForm(true);
    }
    return (
      <div className="myPostsCard" key={_id}>
        <h1>{title}</h1>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <p>Active: {active ? "Yes" : "No"}</p>
        {/* <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button> */}
        {/* <Link to="/UpdatePost">Update Post</Link> */}
        <button className="deleteButton" onClick={() => handleClick(_id, token)}>Delete Post</button>
        {/* <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button> */}
        {/* <button className="editPost" onClick={ showForm && <UpdatePost post={post} token={token} /> }>Edit Post</button> */}
        <button className="editPost" onClick={() => handleEditClick()}>Edit Post</button>
        {showForm && <UpdatePost post={post} token={token} /> }


        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }