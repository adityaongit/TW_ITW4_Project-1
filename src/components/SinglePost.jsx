import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const SinglePost = () => {
  return (
    <div style={{ flex: 9 }} className="singlepost flex">
      <div className="singlePostWrapper p-5 pr-0">
        <img
          className="singlePostImg w-full h-[300px] rounded-md object-cover"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle text-center m-3 text-3xl">
          Lorem ipsum dolor
          <div className="singlePostEdit float-right text-base flex ">
            <div className="ml-2.5 cursor-pointer text-green-700 ">
              <FaEdit />
            </div>
            <div className="ml-2.5 cursor-pointer text-red-400 ">
              <FaTrash />
            </div>
          </div>
        </h1>
        <div className="singlePostInfo mb-5 flex justify-between text-base ">
          <span>
            Author:
            <b className="singlePostAuthor ml--[5px]"> Safak</b>
          </span>
          <span className="singlePostDate">1 day ago</span>
        </div>
        <p className="singlePostDesc text-lg leading-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
