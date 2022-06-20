import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      style={{ height: 'calc(100vh - 50px)' }}
      className="register bg-cover flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 "
    >
      <span className="registerTitle text-5xl ">Register</span>
      <form className="registerForm flex flex-col mt-5">
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Username</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your username..."
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Email</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="mt-2.5 mb-2.5 ml-0 mr-0">Password</label>
        <input
          className="registerInput p-3 bg-white border-none rounded-xl focus:outline-none"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton mt-5 cursor-pointer bg-blue-900 text-white p-3 border-none rounded-xl text-center ">
          Sign Up
        </button>
      </form>
      <button className="registerregisterButton absolute top-20 right-5 bg-blue-900 cursor-pointer p-3 border-none text-white rounded-3xl ">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;
