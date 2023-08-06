// import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

function App() {

  return (
    <>
      <LoginPage />
    </>
  )
}

export default App
