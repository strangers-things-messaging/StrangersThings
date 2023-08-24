import { Link, useNavigate} from 'react-router-dom'
import LoginPage from '../pages/LoginPage.jsx'
import { Routes, Route } from 'react-router-dom'
export default function NavBar({ token, setToken }) {
    //conditionally render links based on token
    const navigate = useNavigate()
    function handleClick() {
        setToken("")
        navigate("/LoginPage")
    }
    
    return (
        <div id='navbar' >
            <Link to="/">Sign Up</Link>
            <Link to="/LoginPage">Login</Link>
            <Link to="/ProfilePage">Profile Page</Link>
            <Link to="/CreatePostPage">Create Post</Link>
            <Link to="/Posts">Posts</Link>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}