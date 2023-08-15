import {fetchPosts} from '../API'

export default function PostCard({ post, fetchPosts }) {
    const { _id, title, username, description, location, price, willDeliver } = post;
    async function showPosts() {
        await fetchPosts()
    }
    showPosts()
    return (
      <div className="postCard" key={_id}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price} {location} {willDeliver}</p>
        <p>{username}</p>
      </div>
    )
  }