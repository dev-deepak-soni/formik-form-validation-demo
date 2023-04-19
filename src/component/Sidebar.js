import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' text-white text-sm font-bold'>
      <ul>
        <Link to="/"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Home</li></Link>
        <Link to="/login"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Login</li></Link>
        <Link to="/signup"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Signup-useFormik()</li></Link>
        <Link to="/signupyup"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Signup-Yup</li></Link>
        <Link to="/formik"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Formik Component</li></Link>
        <Link to="/formikwitherrortag"><li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>Formik with Error Tag</li></Link>
        <li className='cursor-pointer p-2 m-2 hover:bg-gray-200 hover:text-black shadow rounded-xl'>App Store</li>
      </ul>
    </div>
  )
}

export default Sidebar