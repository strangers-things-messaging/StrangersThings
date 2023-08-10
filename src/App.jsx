import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import SignUpPage from './pages/SignUpPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'


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
          {/* <Route path="/LoginPage" element={<LoginPage />}/> */}
          <Route path="/users/me" element={<ProfilePage token={token} />}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App
