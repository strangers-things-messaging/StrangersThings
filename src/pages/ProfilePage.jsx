// import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import token from './LoginPage.jsx'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function ProfilePage(token) {
    const myData = async () => {

        try {
          const response = await fetch(`${API_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token.username}`
            },
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
    return (
        <>
            <div>

           
            <NavBar />
            <p>`welcome ${token.username}!`</p>
            </div>
        </>
    )
}