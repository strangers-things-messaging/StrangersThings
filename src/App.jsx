import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import SignUpPage from './pages/SignUpPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import CreatePostPage from './pages/CreatePostPage.jsx'
import LoginPage from './pages/LogInPage.jsx'
import Posts from './pages/Posts.jsx'


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <>
      <div>
        
        <Routes>
          <Route path="/" element={<SignUpPage setToken={setToken}/>}/>
          <Route path="/ProfilePage" element={<ProfilePage token={token} />}/>
          <Route path="/CreatePostPage" element={<CreatePostPage token={token} />}/>
          <Route path="/LoginPage" element={<LoginPage setToken={setToken} />}/>
          <Route path="/Posts" element={<Posts token={token} />}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App
