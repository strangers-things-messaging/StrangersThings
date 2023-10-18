import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function LoginPage({setToken}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    // const [token, setToken] = useState(localStorage.getItem('token'))
  
    const navigate = useNavigate()
    async function submitForm(e) {
      e.preventDefault()
      const login = async () => {
        try {
            const response = await fetch(`${API_URL}/users/login`, 
            { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                    user: {
                        username, 
                        password 
                    }
                }) 
            })
            const result = await response.json();
            if (result.success) {
              const { token } = result.data
              localStorage.setItem('token', token);
              setToken(token)
              navigate('/ProfilePage')
            } else {
              setErrorMessage(result.error.message)
            } 

            
            console.log(result)
            
        } catch (err) {
            console.error(err)
        }          
    }
      login()
    }
    
    return (
      <div className='login'>
       
        <h1>Log In</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="username floatingInput">Username: </label>
          <input
            value={username} 
            type="username"
            id="username floatingInput"
            className="form-control"
            placeholder="JohnDoe1"
            onChange={(e) => {
              setErrorMessage('');
              setUsername(e.target.value)
            }} 
          />
          <br></br>
          <label htmlFor="password floatingPassword">Password: </label>
          <input
            value={password}
            type="password"
            id="password floatingInput"
            className="form-control"
            placeholder="Password1!"
            onChange={(e) => {
              setErrorMessage('');
              setPassword(e.target.value)
            }}
          />
          <p>{errorMessage}</p>
          <button type="submit">Log In</button>
        </form>
      </div>
    )
  }
