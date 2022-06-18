import React from 'react';

const Header = () => {
  return (
    <div className="mt-[60px]">
      <div className="headerTitles flex flex-col items-center">
        <span className="absolute top-1/6 text-xl font-sans">React & Node</span>
        <span className="absolute top-1/5 text-[100px]">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="headerImage w-full h-[450px] mt-[80px] object-cover"
        alt="titleimg"
      />
    </div>
  );
};

export default Header;
