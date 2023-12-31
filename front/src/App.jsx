import React, { useState, useEffect, useHistory } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./layout/Header";
import MainContent from "./MainContent";
import Footer from "./layout/Footer";
// The main application component
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const checkAuthenticated = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "GET",
        credentials: "include", // This is required to include the session cookie with the request
      });
      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setCurrentUser({ username: data.user });
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking authentication status:", error);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
    <Router>
      <Header />

      
        <h1 className="app-title">Note App</h1>
        <h2 className="app-description">Your Thoughts, Noted.</h2>
        <h2 className="app-description">Your Tasks, Managed.</h2>
        <div className="container">
          <div className="App">
            <MainContent />
          </div>
        </div>
      
      <Footer />
    </Router>
  );
}

export default App;
