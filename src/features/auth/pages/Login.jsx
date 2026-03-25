import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Login successful! 🎉");

        localStorage.setItem("user", JSON.stringify(data.user)); // 🔥 save user

        navigate("/app"); // 🔥 go to dashboard
      } else {
        alert("Login failed: " + data.message);
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <input
        className="inputBox"
        type="text"
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

      <button className="appButton" onClick={handleLogin}>
        Login
      </button>

      <p style={{ marginTop: "15px" }}>
  Don't have an account?{" "}
  <span
    style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </span>
</p>
    </div>
  );
};

export default Login;