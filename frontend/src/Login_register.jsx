import React, { useState } from 'react';
import LoginPage from './Login.jsx';
import RegisterPage from './Register.jsx';


export default function Login_register() {
  const [currFrom, setcurrForm] = useState("login");

  const toggleForm = (formName) => {
    setcurrForm(formName);
  }

  return (
    <div className='App'>
      {
        currFrom === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <RegisterPage onFormSwitch={toggleForm} />
      }
    </div>
  )
}