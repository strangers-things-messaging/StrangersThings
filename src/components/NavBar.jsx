import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id='navbar'>
            <Link to="/">Sign Up</Link>
            <Link to="/LoginPage">Login</Link>
            <Link to="/users/me">Profile Page</Link>
            
        </div>
    )
}