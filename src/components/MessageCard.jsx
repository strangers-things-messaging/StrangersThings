export default function MessageCard({ post, token, message }) {
    const { _id, fromUser, content } = message
    return (
        <div className="messageCard" key={_id}>
            <h2>Message from {fromUser.username}</h2>
            <p>{content}</p>
            
        </div>
        
    )
}