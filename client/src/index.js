import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './Context/Auth';
import 'antd/dist/antd.compact.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
