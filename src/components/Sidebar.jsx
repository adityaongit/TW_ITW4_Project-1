import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPinterestSquare,
} from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div
      className="sidebar flex h-fit m-5 pb-8 rounded-[10px] flex-col items-center"
      style={{ flex: 3 }}
    >
      <div className="sidebarItem flex flex-col items-center">
        <div className="sidebarTitle border-t-2 border-b-2 m-[10px] p-[5px] w-4/5 text-center leading-5 font-semibold text-lg">
          ABOUT ME
        </div>
        <img
          className="mt-4 w-64 h-64"
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className="p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          aliquid nam. Sunt quam ab qui!
        </p>
      </div>
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle border-t-2 border-b-2">CATEGORIES</span>
        <ul className="sidebarlist list-none mb-8">
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Life</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Music</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Sports</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Style</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Cinema</li>
          <li className="inline-block w-1/2 mt-4 cursor-pointer">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem flex flex-col items-center">
        <span className="sidebarTitle border-t-2 border-b-2">FOLLOW US</span>
        <div className="sidebarSocials mt-4 w-64 flex justify-center items-center">
          <FaFacebookSquare className="ml-3 text-base" />
          <FaInstagramSquare className="ml-3 text-base" />
          <FaPinterestSquare className="ml-3 text-base" />
          <FaTwitterSquare className="ml-3 text-base" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
