import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
export default function LoginPage() {
//   const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()
  async function submitForm(e) {
    e.preventDefault()
    if (password.length < 8) {
      setErrorMessage("Password is too short");
    } else {
      const response = await fetch(API_URL, 
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
        //   name,
          username, 
          password 
        }) 
      })
    //   setName('')
      setUsername(''); 
      setPassword('');
      const { token } = await response.json()
      localStorage.setItem('token', token);
      navigate('/ProfilePage')
    }
  }


  return (
    <div>
      <h1>Login/Sign Up</h1>
      <form onSubmit={submitForm}>
      {/* <label htmlFor="name">Name: </label>
        <input
          value={name} 
          type="name"
          id="name"
          onChange={(e) => {
            setErrorMessage('');
            setName(e.target.value)
          }} // changes the state value and rerenders the form with the new values
        /> */}
        <br></br>
        <label htmlFor="username">Username: </label>
        <input
          value={username} // controls the input value
          type="username"
          id="username"
          onChange={(e) => {
            setErrorMessage('');
            setUsername(e.target.value)
          }} // changes the state value and rerenders the form with the new values
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => {
            setErrorMessage('');
            setPassword(e.target.value)
          }}
        />
        <p>{errorMessage}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

