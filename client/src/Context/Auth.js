import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export default ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem('auth-token');
  const verifyToken = tkn => {
    axios({
      method: 'get',
      url: '/api/student/verifyToken',
      headers: {
        'x-auth-token': tkn,
      },
    })
      .then(res => {
        if (res.data.isAuthenticated) setIsAuthenticated(true);
        else setIsAuthenticated(false);
      })
      .catch(err => {
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    verifyToken(token);
    const interval = setInterval(() => {
      verifyToken(token);
    }, 1000 * 60 * 10);
    return () => {
      clearInterval(interval);
    };
  }, [token]);
  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};
