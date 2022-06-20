import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 50px)' }}
      className="login bg-cover flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 "
    >
      <span className="loginTitle text-5xl ">Login</span>
      <form className="loginForm flex flex-col mt-5">
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Email</label>
        <input
          className="loginInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Password</label>
        <input
          className="loginInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton mt-5 cursor-pointer bg-blue-900 text-white p-3 border-none rounded-xl text-center ">
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
