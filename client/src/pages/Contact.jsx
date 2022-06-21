import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="text ">
          <h1 className="text-5xl">Hi, how can we help?</h1>
          <p className="py-5 text-lg w-2/3">
            Our team is ready to answer your questions - we'd love to hear from
            you!
          </p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 mt-6 px-4 rounded-full">
            CHAT WITH US
          </button>
        </div>
        <div className="image py-20">
          <img
            className="h-72"
            src="https://www.helpsystems.com/sites/default/files/media/hs-contact-us-figure.png"
            alt="logo"
          />
        </div>
      </div>
      {/* <hr className="border-blue-900 w-1/3 m-auto pb-10 " /> */}
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3798.jpg?w=996&t=st=1655809296~exp=1655809896~hmac=7f167b48691196722a369924144a66493cc45ebe9c32e667197557378861eb3f")`,
        }}
        className=" bg-no-repeat bg-cover py-10 "
      >
        <h1 className="text-center text-4xl mb-10 mt-3">Meet the Developers</h1>
        <div className="devsinfo container m-auto grid grid-cols-2 gap-16">
          <div className="dev1 text-center">
            <img
              className="h-28 m-auto mb-4"
              src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"
              alt="batman"
            />
            <span className="text-xl">Aditya Jindal</span>
            <br />
            ady.work@outlook.com
            <br />
            <a
              href="https://linkedin.com/in/adityaonin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="dev1 text-center">
            <img
              className="h-28 m-auto mb-4"
              src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"
              alt="batman"
            />
            <span className="text-xl">Deepakshi Puri</span>
            <br />
            deepakshi@gmail.com
            <br />
            <a
              href="https://www.linkedin.com/in/deepakshi-puri-27a590202/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="dev1 text-center">
            <img
              className="h-28 m-auto mb-4"
              src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"
              alt="batman"
            />
            <span className="text-xl">Aditya Jindal</span>
            <br />
            ady.work@outlook.com
            <br />
            <a
              href="https://linkedin.com/in/adityaonin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="dev1 text-center">
            <img
              className="h-28 m-auto mb-4"
              src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"
              alt="batman"
            />
            <span className="text-xl">Shubham Sharma</span>
            <br />
            ady.work@outlook.com
            <br />
            <a
              href="https://linkedin.com/in/adityaonin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
