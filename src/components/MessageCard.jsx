export default function MessageCard({ post, token, message }) {
    const { post, _id, fromUser, content, updatedAt} = message
    return (
        <div className="messageCard" key={post._id}>
            <h2>{fromUser.username}</h2>
            <p>{content}</p>
            <p>{updatedAt}</p>
        </div>
        
    )
}