import React from 'react'
import Sidebar from './Sidebar'
import SinglePost from './SinglePost'

const Single = () => {
  return (
    <div className='single flex'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}

export default Single