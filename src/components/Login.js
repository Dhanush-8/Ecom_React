import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <input className="inputBox" type="text" placeholder="Enter Email" />
      <input className="inputBox" type="password" placeholder="Enter Password" />
      <button className="appButton" type="button">Login</button>
    </div>
  );
};

export default Login;