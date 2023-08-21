import { deletePost } from "../API";

export default function MyPostsCard({ post }, token) {
    //TODO show messages once send message is functional
    const { _id, title, description, location, price, willDeliver, messages, active} = post;
    // const [showForm, setShowForm] = useState(false)
    async function handleClick(_id, token) {
        await deletePost(_id, token);
    }
    return (
      <div className="myPostsCard" key={_id}>
        <h1>{title}</h1>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <p>Active: {active ? "Yes" : "No"}</p>
        <button>Edit</button>
        <button className="deleteButton" onClick={() => handleClick(_id, token)}>Delete Post</button>
        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }