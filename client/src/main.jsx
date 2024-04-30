import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from './contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </BrowserRouter>,
);
