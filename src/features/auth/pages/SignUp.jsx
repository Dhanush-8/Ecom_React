import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    // 🧠 Basic validation
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Signup successful 🎉");

        // 🔥 Option 1 (current): go to login
        navigate("/login");

        // 🔥 Option 2 (better UX - optional)
        // localStorage.setItem("user", JSON.stringify(data.user));
        // navigate("/app");

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="Register"> {/* ✅ IMPORTANT (matches CSS) */}
      <h2>Create Account</h2>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="inputBox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="appButton" onClick={handleSignup}>
        Sign Up
      </button>

      {/* 🔗 Login Redirect */}
      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;