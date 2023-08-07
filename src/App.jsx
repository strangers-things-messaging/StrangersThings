import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          {/* <Route path="/LoginPage" element={<LoginPage />}/> */}
          <Route path="/ProfilePage" element={<ProfilePage token={token} setToken={setToken}/>}/>
        </Routes>
      </div>
      
      
    </>
  )
}

export default App
