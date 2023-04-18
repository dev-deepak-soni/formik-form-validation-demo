import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=''>
      <ul>
        <Link to="/"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Home</li></Link>
        <Link to="/login"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Login</li></Link>
        <Link to="/signup"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Signup</li></Link>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>About</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Privacy</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Play Store</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>App Store</li>
      </ul>
    </div>
  )
}

export default Sidebar