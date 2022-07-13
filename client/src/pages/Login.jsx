import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      // console.log(email);
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      },
      // {"Access-Control-Allow-Origin": "http://localhost:3000",
      // "Access-Control-Allow-Methods": "POST",
      // "Access-Control-Max-Age": 86400,
      // "Access-Control-Allow-Headers": "Content-Type, Authorization",
      // 'Access-Control-Allow-Credentials': 'true'}
      );
      if(res.data.user){
        res.data && window.location.replace('/');
      }
      else{
        alert(res.data.message);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      style={{
        height: 'calc(100vh - 50px)',
        backgroundImage: `url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
      className="login bg-cover flex flex-col items-center justify-center"
    >
      <span className="loginTitle text-5xl ">Login</span>
      <form onSubmit={handleSubmit} className="loginForm flex flex-col mt-5">
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Email</label>
        <input onChange={(e) => setEmail(e.target.value)}
          className="loginInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Password</label>
        <input onChange={(e) => setPassword(e.target.value)}
          className="loginInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="password"
          placeholder="Enter your password..."
        />
        <button type='submit' className="loginButton mt-5 cursor-pointer bg-blue-900 text-white p-3 border-none rounded-xl text-center ">
          Login
        </button>
      </form>
      <button className="loginRegisterButton absolute top-20 right-5 bg-blue-900 cursor-pointer p-3 border-none text-white rounded-3xl ">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
