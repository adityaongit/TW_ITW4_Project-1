import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      console.log(username);
      const res = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      },
      // {"Access-Control-Allow-Origin": "http://localhost:3000",
      // "Access-Control-Allow-Methods": "POST",
      // "Access-Control-Max-Age": 86400,
      // "Access-Control-Allow-Headers": "Content-Type, Authorization",
      // 'Access-Control-Allow-Credentials': 'true'}
      );
      
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      style={{
        height: 'calc(100vh - 50px)',
        backgroundImage: `url("https://images.unsplash.com/photo-1517524615358-1a73bc3fcf51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
      }}
      className="register bg-cover flex flex-col items-center justify-center"
    >
      <span className="registerTitle text-5xl ">Register</span>
      <form className="registerForm flex flex-col mt-5" onSubmit={handleSubmit}>
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Username</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Email</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Password</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="registerButton mt-5 cursor-pointer bg-blue-900 text-white p-3 border-none rounded-xl text-center "
        >
          Sign Up
        </button>
      </form>
      <button className="registerregisterButton absolute top-20 right-5 bg-blue-900 cursor-pointer p-3 border-none text-white rounded-3xl ">
        <Link to="/login">Login</Link>
      </button>
      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
