import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Write = () => {
  return (
    <div className="write pt-[50px]">
      <img
        style={{ width: '70vw' }}
        className="writeImg ml-[150px] h-64 rounded-xl object-cover"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm relative">
        <div className="writeFormGroup ml-[150px] flex items-center">
          <label htmlFor="fileInput">
            <div
              style={{ 'border-radius': '50%' }}
              className="writeIcon w-6 h-6 text-xl border flex items-center justify-center cursor-pointer"
            >
              <FaPlus />
            </div>
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            style={{ width: '70vw' }}
            className="writeInput text-3xl border-none p-5"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup ml-[150px]">
          <textarea
            style={{ width: '70vw' }}
            className="writeInput writeText h-[100vh] text-xl "
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button
          className="writeSubmit bg-teal-700 text-white absolute top-5 right-12 p-2.5 rounded-xl border-none text-base cursor-pointer flex items-center"
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
