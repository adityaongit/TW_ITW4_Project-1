import React from 'react';

const Post = () => {
  return (
    <div className="post flex flex-col w-96 mx-6 mt-0 mb-10">
      <img
        className="postImg object-cover rounded-lg h-72 w-96"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="pic"
      />

      <div className="postInfo flex flex-col items-center">
        <div className="postCats">
          <span className="postCat text-sm leading-5 mt-4 mr-2.5 font-normal cursor-pointer ">
            Music
          </span>
          <span className="postCat  text-sm leading-5 mt-4 mr-2.5 font-normal cursor-pointer ">
            Life
          </span>
        </div>
        <span className="postTitle text-2xl font-black mt-4 cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate italic text-sm font-normal mt-4 ">
          1 hour ago
        </span>
      </div>
      <p
        style={{
          display: '-webkit-box',
          '-webkit-line-clamp': 4,
          '-webkit-box-orient': 'vertical',
        }}
        className="postDesc font-normal text-sm leading-6 mt-4 overflow-hidden text-ellipsis"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        neque libero quas nesciunt perspiciatis numquam sapiente magnam
        doloremque distinctio vel.
      </p>
    </div>
  );
};

export default Post;
