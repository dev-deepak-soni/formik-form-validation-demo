import React from 'react'

const Sidebar = () => {
  return (
    <div className=''>
      <ul>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Home</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Login</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Signup</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>About</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Privacy</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>Play Store</li>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 shadow rounded-xl'>App Store</li>
      </ul>
    </div>
  )
}

export default Sidebar