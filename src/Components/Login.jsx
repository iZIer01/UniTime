import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

  /*I'm  moving to using css module  */
import styles from "./Style/Login.module.css"

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
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setError("Could not connect to UniTime backend.");
    }
  };

  return (
    <form className={styles.LoginContainer} onSubmit={handleSubmit}>
      {/* Image section */}
      <div className={styles.imgSection}>
        <div className={styles.iconContainer}>
          <div className={styles.imgBody}>
            <img src={NUST} alt="NUST Logo" />
          </div>
          <hr />
          <div className={styles.imgBody}>
            <img src={UniTime} alt="UniTime Logo" />
          </div>
        </div>

        <div className={styles.mainImage}>
          <div className={styles.imgBody2}>
            <img src="#" alt="Library" />
          </div>
        </div>
      </div>

      {/* Login section */}
      <div className={styles.loginSection}>
        <h1>Login</h1>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          id="password"
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
