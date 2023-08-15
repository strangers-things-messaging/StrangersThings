import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id='navbar'>
            <Link to="/">Sign Up</Link>
            <Link to="/LoginPage">Login</Link>
            <Link to="/ProfilePage">Profile Page</Link>
            <Link to="/CreatePost">Create Post</Link>
            <Link to="/Posts">Posts</Link>
        </div>
    )
}