import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import person_icon from '../assets/person.png';
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🧠 Sign Up
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Sign Up successful! Please Login.");
        setAction("Login"); // switch to login page
      } else {
        alert("❌ Sign Up failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong during sign up.");
    }
  };

  // 🧠 Login
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Login successful!");
        navigate("/welcome");
      } else {
        alert("❌ Password not matched!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "Sign Up" && (
          <div className='input'>
            <img src={person_icon} alt='' />
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className='input'>
          <img src={email_icon} alt='' />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='input'>
          <img src={password_icon} alt='' />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div className='submit-container'>
          <div className='submit' onClick={handleSignup}>Sign Up</div>
          <div className='submit gray' onClick={() => setAction("Login")}>Login</div>
        </div>
      ) : (
        <div className='submit-container'>
          <div className='submit' onClick={handleLogin}>Login</div>
          <div className='submit gray' onClick={() => setAction("Sign Up")}>Sign Up</div>
        </div>
      )}
    </div>
  );
};


