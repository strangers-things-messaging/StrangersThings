import { useState } from "react";
const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
export default function LoginPage({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 6 && password.length < 8) {
        setError("Username and password are too short");
    } else if (password.length < 8) {
        setError("Password must be at least 8 characters");
    } else if (username.length < 6) {
        setError("Username must be at least 6 characters");
    } else {
        setUsername(''); 
        setPassword('');
    }

    console.log("hello");
    try {
      const response = await fetch(
        API_URL,
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      // console.error(error)
      setError(error.message);
    }
    setUsername(" ");
    setPassword(" ");
  }
  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form method="POST" onSubmit={handleSubmit}>
        <label>
          Username:{""}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:{""}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <br></br>
        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}