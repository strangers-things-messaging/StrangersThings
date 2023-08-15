import {fetchPosts} from '../API'

export default function PostCard({ post, fetchPosts }) {
    const { _id, title, author, description, location, price, willDeliver } = post;
    async function showPosts() {
        await fetchPosts()
    }
    showPosts()
    return (
      <div className="postCard" key={_id}>
        <h3>{title}</h3>
        <p>Author: {author.username}</p>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver}</p>
        <button>Send Message to Seller</button>
        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }