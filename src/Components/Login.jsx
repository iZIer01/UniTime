import React, { useState } from "react";
import "./Style/Login.css";

import NUST from "../assets/Image/NUST-logo.png";
import UniTime from "../assets/Image/unitime-logo.png";
import Library from "../assets/Image/library.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/login.action", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username,
          password: password,
        }),
        credentials: "include",
      });

      if (response.ok) {
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("Could not connect to UniTime backend.");
    }
  };

  return (
    <form className="LoginContainer" onSubmit={handleSubmit}>
      {/* Image section */}
      <div className="imgSection">
        <div className="iconContainer">
          <div className="imgBody">
            <img src={NUST} alt="NUST Logo" />
          </div>
          <hr />
          <div className="imgBody">
            <img src={UniTime} alt="UniTime Logo" />
          </div>
        </div>

        <div className="mainImage">
          <div className="imgBody2">
            <img src="#" alt="Library" />
          </div>
        </div>
      </div>

      {/* Login section */}
      <div className="loginSection">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </form>
  );
}

export default Login;
