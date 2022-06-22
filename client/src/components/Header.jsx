import React from 'react';

const Header = () => {
  return (
    <div className="mt-[60px]">
      <div className="headerTitles flex flex-col items-center">
        <span className="absolute top-1/6 text-xl font-body">
          Stay curious.
        </span>
        <span className="absolute top-1/5 pt-[12px] text-[100px] font-header">
          Blog
        </span>
      </div>
      <img
        src="https://img.freepik.com/free-photo/woman-works-office-blue-background-concept-workspace-working-computer-freelance-banner_164357-1144.jpg?w=2000"
        className="headerImage w-full h-[450px] mt-[80px] object-cover"
        alt="titleimg"
      />
    </div>
  );
};

export default Header;
