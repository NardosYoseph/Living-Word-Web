"use client"
import React, { createContext , useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
 
    const storedToken = localStorage.getItem('token');
    localStorage.clear();
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};


