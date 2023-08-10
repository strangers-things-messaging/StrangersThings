import { useState } from 'react'
import NavBar from '../components/NavBar.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function LoginPage() {


    // const login = async () => {
    //     const [username, setUsername] = useState('')
    //     const [password, setPassword] = useState('')
    //     const [errorMessage, setErrorMessage] = useState('')
    //     try {
    //         const response = await fetch(`${API_URL}/users/login`, {
    //             method: "POST",
    //             headers: {
    //             'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //             user: {
    //                 username,
    //                 password
    //             }
    //             })
    //         });
    //         const result = await response.json();
    //         console.log(result);
    //         return result
    //     } catch (err) {
    //     console.error(err);
    //     }
        return (
            <>
            <NavBar />
            {/* <form >
                <label htmlFor="username">Username: </label>
                <input
                    value={username} 
                    type="username"
                    id="username"
                    onChange={(e) => {
                        setErrorMessage('');
                        setUsername(e.target.value)
                    }} 
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
            </form> */}
            </>
        )
    }
    