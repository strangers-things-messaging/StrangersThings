import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'

const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function ProfilePage({token}) {
//make state vars
    const [username, setUsername] = useState("")
    const [messages, setMessages] = useState("")
    const [posts, setPosts] = useState("")
//wrap myData in useEffect
    useEffect(() => {
        const myData = async () => {
            try {
            const response = await fetch(`${API_URL}/users/me`, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            });
            const result = await response.json();
            console.log(result);
            setUsername(result.data.username)
            setMessages(result.data.messages)
            setPosts(result.data.posts)
            return result
            } catch (err) {
            console.error(err);
            }
        }
        myData();
    }, [token])
    return (
        <>
        {
        //use state here
        }
            <div>
                <NavBar />
                <p>welcome {username}!</p>
            </div>
            <div>
                {messages}
                {posts}
            </div>
        </>
    )
    
}


// import NavBar from '../components/NavBar'
// import { useState } from 'react';

// const COHORT_NAME='2302-acc-et-web-pt-a'
// const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// export default function ProfilePage() {
//     const token = JSON.parse(localStorage.getItem("token"))
//     const [userData, setUserData] = useState('')

//     const myData = async () => {
//       try {
//         const response = await fetch(`${API_URL}/users/me`, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token.username}`
//           },
//         });
//         const result = await response.json();
//         setUserData(result)
//         console.log(result);
//         return result
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     return (
//         <>
//             <div>

           
//             <NavBar />
//             <p>`welcome ${token.username}!`</p>
//             <h3>User Data:</h3>
//             <div>{userData}</div>
//             </div>
//         </>
//     )
// }
