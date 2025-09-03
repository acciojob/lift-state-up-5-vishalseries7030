import React, { useState } from "react";
import './../styles/App.css'; 
import LoginForm from "./Loginform"; 

const App = () => {
  // Parent state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback to update state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Parent Component</h1>
      {isLoggedIn ? (
        <h2 style={{ textAlign: "center" }}>You are logged in!</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
