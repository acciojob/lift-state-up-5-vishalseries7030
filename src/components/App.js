import React, { useState } from "react";
import './../styles/App.css'; // CSS import
import LoginForm from "./Loginform"; // Child component import

const App = () => {
  // Parent state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Parent Component</h1>

      {isLoggedIn ? (
        // Cypress expects <p> with exact text
        <p style={{ textAlign: "center", marginTop: "20px" }}>You are logged in!</p>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
