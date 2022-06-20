import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false;
  return (
    <div
      style={{ zIndex: 999 }}
      className="container mx-auto flex justify-between items-center h-15 sticky"
    >
      <Link to="/">
        <div className="text-3xl italic font-bold text-blue-900">
          SmartWORDS.
        </div>
      </Link>

      <ul className="flex">
        <li className="p-4">
          <Link to="/">HOME</Link>
        </li>
        <li className="p-4">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="p-4">
          <Link to="/write">WRITE</Link>
        </li>
        <li className="p-4">
          <Link to="/">{user && 'LOGOUT'}</Link>
        </li>
      </ul>
      <div className="flex justify-between items-center">
        {user ? (
          <Link to="/settings">
            <img
              className="w-[40px] h-[40px] rounded-full m-4"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="dp"
            />
          </Link>
        ) : (
          <ul className="topList flex justify-center m-0 p-0 list-none">
            <li className="topListItem m-5 cursor-pointer">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem m-5 cursor-pointer">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <FaSearch />
      </div>
    </div>
  );
};

export default Navbar;
