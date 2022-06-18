import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='posts flex flex-wrap m-5' style={{flex : 9}}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts