import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, AuthProvider } from 'contexts'

ReactDOM.render(
  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
