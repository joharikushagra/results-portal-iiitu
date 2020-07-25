import React, {useState, useEffect, createContext} from 'react';
import {verifyToken} from '../Service/Auth';

export const StoreContext = createContext();

export default function ({children}) {
  const [student, setStudent] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const updateToken = token => {
    localStorage.setItem('auth-token', token);
    setToken(token);
  };

  useEffect(() => {
    const std = JSON.parse(localStorage.getItem('student'));
    const tkn = localStorage.getItem('auth-token');
    if (std) {
      setStudent(std);
    }
    if (tkn) {
      console.log('djfhds');
      setToken(tkn);
      if (!verifyToken(token)) {
        localStorage.setItem('auth-token', '');
        setToken('');
        setIsAuthenticated(false);
      } else {
        console.log('asdwahdiuagi');
        setIsAuthenticated(true);
      }
    }
  });

  return (
    <StoreContext.Provider
      value={{student, setStudent, token, updateToken, isAuthenticated, setIsAuthenticated}}
    >
      {children}
    </StoreContext.Provider>
  );
}
