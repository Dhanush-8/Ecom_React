import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Below useEffect is used to check if the user is already logged in or not if logged in then it will take to home page otherwise it will stay on the sign-up page
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  },[])

  const collectData = async () => {
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    let result = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result));
    navigate("/");
    alert("User registered successfully 🎉");
  };

  return (
    <div className="Register">
      <h2>Register Here</h2>

      <input
        className="inputBox"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputBox"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={collectData} className="button">
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
