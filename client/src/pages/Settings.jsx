import React from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="settings flex">
      <div style={{ flex: 9 }} className="settingsWrapper p-5">
        <div className="settingsTitle flex items-center justify-between">
          <span className="settingsTitleUpdate text-3xl mb-5 text-red-400">
            Update Your Account
          </span>
          <span className="settingsTitleDelete text-red-700 text-xs cursor-pointer">
            Delete Account
          </span>
        </div>
        <form className="settingsForm flex flex-col">
          <label className="text-xl mt-5">Profile Picture</label>
          <div className="settingsPP flex items-center mt-2.5 mb-2.5">
            <img
              className="h-[70px] w-[70px] rounded-2xl object-cover"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <div
                style={{ 'border-radius': '50%' }}
                className="w-[25px] h-[25px] p-[5px] flex justify-center items-center border-none ml-2.5 text-white bg-red-400 cursor-pointer "
              >
                <FaUserCircle />
              </div>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none', width: '30%' }}
              className="settingsPPInput text-gray-600 mt-2.5 mb-2.5 h-[30px] border-b-gray-100 "
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button
            className="settingsSubmitButton self-center w-[150px] rounded-3xl border-none text-white bg-teal-500 p-2.5 mt-5 cursor-pointer flex items-center justify-center   hover:bg-teal-600 "
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
