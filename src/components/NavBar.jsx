import { Link } from 'react-router-dom'

export default function NavBar({ token, setToken }) {
    //conditionally render links based on token

    async function handleClick(token, setToken ) {
        await setToken("")
    }
    return (
        <div id='navbar' >
            <Link to="/">Sign Up</Link>
            <Link to="/LoginPage">Login</Link>
            <Link to="/ProfilePage">Profile Page</Link>
            <Link to="/CreatePostPage">Create Post</Link>
            <Link to="/Posts">Posts</Link>
            <button onClick={() => handleClick(token, setToken)}>Logout</button>
        </div>
    )
}