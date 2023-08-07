import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div id='navbar'>
            <Link to="/">Login/Sign Up</Link>
            <Link to="/ProfilePage">Profile Page</Link>
        </div>
    )
}