import React from 'react'

const About = () => {
  return (
    <>
      <h1
        style={{ color: '#624aa2' }}
        className="text-center font-bold text-4xl pt-5"
      >
        {' '}
        About Us
      </h1>
      <br />
      <div className="container flex items-center justify-around p-5">
        <img
          className="w-1/5 pl-20 py-10 "
          src="https://www.smartwords.in/assets/Blog-post/thewizards.jpg"
          alt="logo"
        />
        <p className="w-1/2 text-lg pb-10 pt-5 text-justify pl-10">
          We are aiming to create a platform on which we will try to provide
          solutions to many problems in many fields like education, social life,
          life aspects, future planning and other day to day problems. We will
          provide solutions by writing Articles, Snippets or Blogs about that
          topic. Also we would try to provide precise,reliable and accurate
          content.
          <br />
          <br />
          There are many platforms which are working on these things like Quora,
          Pinterest and many blogging websites. But many times the information
          there is not reliable and accurate and also with time platforms like
          Quora are also failing to maintain their decorum and are just becoming
          a meme place.
          <br />
          <br />
          Many unwanted suspicious contents become trending on Quora which are
          not good to read and also they are hateful. And also one will go there
          to find their problem's solution but get stuck there and waste their
          crucial time in these wasteful contents.
        </p>
      </div>
    </>
  );
}

export default About