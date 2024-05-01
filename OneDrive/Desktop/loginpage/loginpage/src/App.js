import LoginForm from "./components/loginform";
import './App.css';
import React, { useState, useEffect } from 'react';

import SignIn from './signin';
import { auth } from './firebase'; 
function App() {
  return (
    <div className="page">
      <LoginForm />
    </div>
  );
}

export default App;