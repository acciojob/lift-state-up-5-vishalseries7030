import React, { useState } from "react";

const LoginForm = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
      backgroundColor: "#f0f0f0",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px #ccc",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto"
    }}>
      <div style={{ display: "flex", width: "100%", marginBottom: "15px", alignItems: "center" }}>
        <label style={{ width: "80px" }}>Username:</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ display: "flex", width: "100%", marginBottom: "15px", alignItems: "center" }}>
        <label style={{ width: "80px" }}>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      <button type="submit" style={{
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        width: "100%"
      }}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
