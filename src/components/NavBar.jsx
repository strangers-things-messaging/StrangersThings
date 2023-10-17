import { Link, useNavigate} from 'react-router-dom'


export default function NavBar({ token, setToken }) {
    //conditionally render links based on token
    const navigate = useNavigate()
    function handleClick() {
        setToken("")
        navigate("/LoginPage")
    }
    if (!token) {
        return (
            <>
                <div className="navDiv">
                <nav className="navbar fixed-top bg-body-tertiary navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid navColor">
                        <a className="navbar-brand" href="#">Stranger's Things</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link"  href="#">Sign Up</Link>
                                <Link to="/LoginPage" className="nav-link" href="#">Log In</Link>
                                <Link to="/Posts" className="nav-link" href="#">Posts</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    } else if (token) {
        return (
            <>
                <div className="navDiv">
                <nav className="navbar fixed-top bg-body-tertiary navbar-expand-lg bg-body-tertiary " >
                    <div className="container-fluid navColor">
                        <a className="navbar-brand" href="#">Stranger's Things</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/ProfilePage" className="nav-link"  href="#">Profile</Link>
                                <Link to="/CreatePostPage" className="nav-link" href="#">Create Post</Link>
                                <Link to="/Posts" className="nav-link" href="#">Posts</Link>
                                <button className="nav-link" onClick={handleClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    }

    
}